const http = require('http');
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Handle form submissions
    handleFormSubmission(req, res);
  } else {
    // Serve static files
    serveStaticFile(req, res);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

function serveStaticFile(req, res) {
  let filePath = '.' + req.url;

  // If the request is for the root, serve the index.html file
  if (filePath === './') {
    filePath = './index.html';
  }

  // Read the file and serve its content
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle file not found
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end(`
      <!DOCTYPE html>
      <html lang="en">
          <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Page-not-found</title>
              <link href="./css/bootstrap.min.css" rel="stylesheet">
              <link href="./css/style.css" rel="stylesheet">
          </head>
          <body>
              <div class="d-flex align-items-center justify-content-center vh-100">
                  <div class="text-center">
                      <h1 class="display-1 fw-bold">404</h1>
                      <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                      <p class="lead">
                          The page you’re looking for doesn’t exist.
                        </p>
                      <a href="index.html" class="btn btn-primary">Go Home</a>
                  </div>
              </div>
          </body>
      </html>
`);
    }

    // Set the appropriate content type based on the file extension
    const contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });

    // Send the file content to the response
    res.end(data);
  });
}


let globalParsedData; 

function handleFormSubmission(req, res) {
  // Prevent the default form submission
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let formData = '';

  // Collect form data from the request
  req.on('data', (chunk) => {
    formData += chunk;
  });

  req.on('end', () => {
    // Parse form data
    const parsedData = new URLSearchParams(formData);
    globalParsedData = parsedData;

    // Extract form fields
    const customerName = parsedData.get('customerName');
    const phone = parsedData.get('phone');
    const email = parsedData.get('email');
    const freightType = parsedData.get('freightType');
    const freightWeight = parsedData.get('freightWeight');
    const destination = parsedData.get('destination');
    const cargoLocation = parsedData.get('cargoLocation');
    const jobDescription = parsedData.get('jobDescription');
    const specialCase = parsedData.get('specialCase');
    const estimatedCost = parsedData.get('estimatedCost');

    // Save the form data to the database
    saveFormDataToDatabase(customerName, phone, email, freightType, freightWeight, destination, cargoLocation, jobDescription, specialCase, estimatedCost);

    // Redirect to the post-job.html page with success message and "View Details" button
    const redirectHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="refresh" content="5;url=../pages/post-job.html" />
          <title>Redirecting...</title>
          <link href="./css/bootstrap.min.css" rel="stylesheet">
          <script src="./js/jquery-3.3.1.min.js"></script>
          <script src="./js/bootstrap.min.js"></script>
          
          </head>
          <body>
            <p>Form submitted successfully!</p>
            <script>
            // Function to open the modal with form data details
            function openSuccessModal(data) {
              // Use Bootstrap's modal method to show the modal
              $('#successModal').modal('show');
          
              // Populate form data details in the modal
              $('#customerNameDetails').text(data.get('customerName'));
              $('#phoneDetails').text(data.get('phone'));
              $('#emailDetails').text(data.get('email'));
              // Add more fields as needed
            }
          </script>
            <button onclick="openSuccessModal(globalParsedData)">View Details</button>
          </body>
          </html>
    `;

    res.end(redirectHTML);
  });
}

function saveFormDataToDatabase(customerName, phone, email, freightType, freightWeight, destination, cargoLocation, jobDescription, specialCase, estimatedCost) {
  const db = new sqlite3.Database('./server/comments.db');

  // Insert the form data into the database
  db.run(
    'INSERT INTO job_posts (customerName, phone, email, freightType, freightWeight, destination, cargoLocation, jobDescription, specialCase, estimatedCost) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [customerName, phone, email, freightType, freightWeight, destination, cargoLocation, jobDescription, specialCase, estimatedCost],
    (err) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
      }
    }
  );

  db.close();
}

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/plain';
  }
}
