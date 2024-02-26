function validateSignupForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("formEmail").value;
  var password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("firstNameError").innerHTML = "";
  document.getElementById("lastNameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  // Validate first name
  if (firstName.trim() === "") {
    document.getElementById("firstNameError").innerHTML =
      "<span style='color: red; font-style: italic;'>First name cannot be empty</span>";
    return;
  }

  // Validate last name
  if (lastName.trim() === "") {
    document.getElementById("lastNameError").innerHTML =
      "<span style='color: red; font-style: italic;'>Last name cannot be empty</span>";
    return;
  }

  // Validate email
  if (email.trim() === "") {
    document.getElementById("emailError").innerHTML =
      "<span style='color: red; font-style: italic;'>Email cannot be empty</span>";
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").innerHTML =
      "<span style='color: red; font-style: italic;'>Invalid email address</span>";
    return;
  }

  // Validate password
  if (password.trim() === "") {
    document.getElementById("passwordError").innerHTML =
      "<span style='color: red; font-style: italic;'>Password cannot be empty</span>";
    return;
  } else if (password.length < 8) {
    document.getElementById("passwordError").innerHTML =
      "<span style='color: red; font-style: italic;'>Password must be at least 8 characters long</span>";
    return;
  } else if (!/\d/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "<span style='color: red; font-style: italic;'>Password must contain at least one digit</span>";
    return;
  } else if (!/[A-Z]/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "<span style='color: red; font-style: italic;'>Password must contain at least one uppercase letter</span>";
    return;
  } else if (!/[^a-zA-Z0-9]/.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "<span style='color: red; font-style: italic;'>Password must contain at least one special character</span>";
    return;
  }

  // If validation passes, send signup request to server
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Signup failed');
      }
      openSignupModal({ firstName, lastName, email });
      setTimeout(()=>{
        window.location.href = 'http://localhost:3000/pages/login.html';
      },2000)
    })
    .catch(error => {
      // Handle signup failure (e.g., show an error message)
      console.error(error);
      alert("Signup failed");
    });
}

// Helper function to open the signup modal
function openSignupModal(data) {
  const modal = new bootstrap.Modal(document.getElementById('signupModal'));
  const modalContent = document.getElementById('signupModalContent');

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

// Event listener to handle form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();
  validateSignupForm();
});
