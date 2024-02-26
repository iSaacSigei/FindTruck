function showToast(message, isSuccess) {
  const toast = new bootstrap.Toast(document.getElementById('loginToast'));
  const toastBody = toast._element.querySelector('.toast-body');
  const toastColorClass = isSuccess ? 'bg-success' : 'bg-danger';

  toastBody.textContent = message;
  toast._element.classList.remove('bg-sucess', 'bg-danger');
  toast._element.classList.add(toastColorClass);
  toast.show();
}

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  // Validate username
  if (username.trim() === "") {
    document.getElementById("usernameError").innerHTML =
      "<span style='color: red; font-style: italic;'>This field cannot be empty</span>";
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

  // Send login request to server
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }
      // Handle successful login
      showToast('Login successful! Redirecting to drivers-page', true);
      setTimeout(()=>{
        window.location.href = 'http://localhost:3000/main.html';
      },2000)
    })
    .catch(error => {
      // Handle login failure
      console.error(error);
      showToast('Invalid login credentials', false);
    });
}
