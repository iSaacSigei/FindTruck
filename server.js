const express = require("express");

const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Set up the SQLite database
const db = new sqlite3.Database("./server/comments.db");

// Serve static files
app.use(express.static(__dirname));

// Enable parsing of JSON data
app.use(express.json());

// Endpoint to handle job post form submissions
app.post("/submit-form", (req, res) => {
  const {
    customerName,
    phone,
    email,
    freightType,
    freightWeight,
    destination,
    cargoLocation,
    jobDescription,
    specialCase,
    estimatedCost,
  } = req.body;

  // Insert data into the job_posts table
  const stmt = db.prepare(`
    INSERT INTO job_posts 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    customerName,
    phone,
    email,
    freightType,
    freightWeight,
    destination,
    cargoLocation,
    jobDescription,
    specialCase,
    estimatedCost
  );

  stmt.finalize();

  // Fetch the last inserted row
  db.get(
    "SELECT * FROM job_posts ORDER BY rowid DESC LIMIT 1",
    (err, jobPost) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Submitted Job Post:", jobPost);

        // Define a price range around the estimatedCost
        const priceRange = 50; 

        // Fetch the closest driver based on price
        db.get(
          `
        SELECT * FROM drivers
        ORDER BY ABS(price - ?) ASC
        LIMIT 1
      `,
          [estimatedCost],
          (err, driver) => {
            if (err) {
              console.error(err);
              res.status(500).send("Internal Server Error");
            } else {
              console.log("Closest Driver:", driver);

              // Here, 'driver' contains the driver with the closest price to estimatedCost
              res.json({ jobPost, driver });
            }
          }
        );
      }
    }
  );
});

// Endpoint to handle user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a user in the database
  db.get(
    "SELECT * FROM users WHERE (email = ? OR phone = ?) AND password = ?",
    [username, username, password],
    (err, user) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        if (user) {
          // Successful login
          console.log("Login successful:", user);

          // Here, you might want to create a session or token to keep the user logged in.
          // For simplicity, we'll just send a success response.
          res.json({ success: true });
        } else {
          // Invalid login credentials
          console.log("Invalid login credentials");
          res.status(401).send("Invalid login credentials");
        }
      }
    }
  );
});

// Endpoint to handle user signup
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Insert data into the users table
  const stmt = db.prepare(`
    INSERT INTO users (firstName, lastName, email, password)
    VALUES (?, ?, ?, ?)
  `);

  stmt.run(firstName, lastName, email, password);

  stmt.finalize();

  // Respond with success
  res.sendStatus(200);
});

// Endpoint to handle search form submissions
app.post("/search-driver", (req, res) => {
  const {
    pickupLocation,
    destination,
    freightWeight,
    freightType, 
    deliveryDate,
    deliveryTime,
  } = req.body;

  // Fetch drivers based on the given freightType
  db.all(
    `
    SELECT * FROM drivers
    WHERE freightType = ?
  `,
    [freightType],
    (err, drivers) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        console.log("Matching Drivers:", drivers);

        //List of drivers with the specified freightType
        res.json({ drivers });
      }
    }
  );
});


// Serve static files and handle 404
app.use((req, res, next) => {
  const filePath = path.join(__dirname, req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle file not found
      res.status(404).send(generateNotFoundPage());
    } else {
      // Serve the file with the appropriate content type
      let contentType = "text/html";

      if (filePath.endsWith(".css")) {
        contentType = "text/css";
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

function generateNotFoundPage() {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Page-not-found</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link href="./css/bootstrap.min.css" rel="stylesheet">
        <link href="./css/style.css" rel="stylesheet">
      </head>
      <body>
        <div class="d-flex align-items-center justify-content-center vh-100">
          <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3">
              <span class="text-danger">Opps!</span> Page not found.
            </p>
            <p class="lead">
              The page you’re looking for doesn’t exist.
            </p>
            <a href="/" class="btn btn-primary">Go Home</a>
          </div>
        </div>  
      </body>
    </html>
  `;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
