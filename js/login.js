// validate login.js
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
    alert("Login successful!");
  }
