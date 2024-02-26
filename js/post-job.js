// Validate post job form
function validatePostJobForm() {
  // Reset previous error messages
  resetPostJobErrorMessages();

  // Flag to track if validation passes
  let isValid = true;

  // Validation for Customer Name
  const customerName = document.getElementById('customerName').value;
  if (customerName.trim() === '') {
    isValid = false;
    displayPostJobError('customerNameError', 'Please enter your name.');
  }

  // Validation for Phone Number
  const phone = document.getElementById('phone').value;
  if (phone.trim() === '') {
    isValid = false;
    displayPostJobError('phoneError', 'Please enter your phone number.');
  }

  // Validation for Email
  const email = document.getElementById('email').value;
  if (email.trim() === '' || !isValidEmail(email)) {
    isValid = false;
    displayPostJobError('emailError', 'Please enter a valid email address.');
  }

  // Validation for Freight Type
  const freightType = document.getElementById('freightType').value;
  if (freightType.trim() === '') {
    isValid = false;
    displayPostJobError('freightTypeError', 'Please enter the freight type.');
  }

  // Validation for Freight Weight
  const freightWeight = document.getElementById('freightWeight').value;
  if (freightWeight.trim() === '') {
    isValid = false;
    displayPostJobError('freightWeightError', 'Please enter the freight weight.');
  }

  // Validation for Destination
  const destination = document.getElementById('destination').value;
  if (destination.trim() === '') {
    isValid = false;
    displayPostJobError('destinationError', 'Please enter the destination.');
  }

  // Validation for Cargo Location
  const cargoLocation = document.getElementById('cargoLocation').value;
  if (cargoLocation.trim() === '') {
    isValid = false;
    displayPostJobError('cargoLocationError', 'Please enter the cargo location.');
  }

  // Validation for Job Description
  const jobDescription = document.getElementById('jobDescription').value;
  if (jobDescription.trim() === '') {
    isValid = false;
    displayPostJobError('jobDescriptionError', 'Please enter the job description.');
  }

  // Validation for Estimated Cost
  const estimatedCost = document.getElementById('estimatedCost').value;
  if (estimatedCost.trim() === '') {
    isValid = false;
    displayPostJobError('estimatedCostError', 'Please enter the estimated cost.');
  }
    // If validation passes, open the modal
    if (isValid) {
      const formData = {
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
      };
  
      openModal(formData);
    }

  // Return true if all validations pass, otherwise prevent form submission
  return isValid;
}

// Helper function to display error messages for post job form
function displayPostJobError(id, message) {
  const errorContainer = document.getElementById(id);
  errorContainer.textContent = message;
  errorContainer.style.color = 'red';
  errorContainer.style.fontStyle = 'italic';
}

// Helper function to reset error messages for post job form
function resetPostJobErrorMessages() {
  const errorContainers = document.querySelectorAll('.error-message');
  errorContainers.forEach(container => {
    container.textContent = '';
  });
}

// Helper function to validate email format
function isValidEmail(email) {
  // Basic email format validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// JavaScript to handle modal display and content
function openModal(data) {
  const modal = new bootstrap.Modal(document.getElementById('jobModal'));
  const modalContent = document.getElementById('modalContent');
  
  // Clear previous content
  modalContent.innerHTML = '';

  // Loop through form fields and include them in the modal content
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      modalContent.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
    }
  }

  // Display the modal
  modal.show();
}

function closeModal() {
  const modal = new bootstrap.Modal(document.getElementById('jobModal'));
  modal.hide();
}

function editData() {
  // Implement edit functionality as needed
  alert('Edit functionality goes here!');
}

// Event listener to handle form submission
document.getElementById('postJobForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Assuming you are using Fetch API for AJAX requests
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customerName: document.getElementById('customerName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      freightType: document.getElementById('freightType').value,
      freightWeight: document.getElementById('freightWeight').value,
      destination: document.getElementById('destination').value,
      cargoLocation: document.getElementById('cargoLocation').value,
      jobDescription: document.getElementById('jobDescription').value,
      specialCase: document.getElementById('specialCase').value,
      estimatedCost: document.getElementById('estimatedCost').value,
      // Add other form fields as needed
    }),
  })
  .then(response => response.json())
  .then(data => openModal(data))
  .catch(error => console.error('Error:', error));
});
