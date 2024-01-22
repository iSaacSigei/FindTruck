```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link
      href="https://fonts.googleapis.com/css?family=Quicksand:400,600,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="fonts/icomoon/style.css" />
    <link rel="stylesheet" href="css/owl.carousel.min.css" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/owl.theme.min.css" />

    <!-- Style -->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="./styles/testimonials.css" />
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <title>FindTruck</title>
  </head>

  <body>
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <!-- .site-mobile-menu -->

    <!-- NAVBAR -->
    <section>
      <header class="site-navbar mt-3">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="site-logo col-6">
              <a href="index.html">FindTruck</a>
            </div>

            <nav class="mx-auto site-navigation">
              <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li><a href="index.html" class="nav-link active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="has-children">
                  <a href="driver-listings.html">Available Drivers <span><i class="fa-solid fa-caret-down"></i></span></a>
                  <ul class="dropdown">
                    <li><a href="single-truck.html">Single Truck</a></li>
                    <li>
                      <a href="special-truck.html">Special Purpose Truck</a>
                    </li>
                  </ul>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="d-lg-none">
                  <a href="post-job.html"
                    ><span class="mr-2"><i class="fa-solid fa-lock"></i></span> Post a Job</a
                  >
                </li>
                <li class="d-lg-none">
                  <span class="icon-lock"></span><a href="login.html">Log In</a>
                </li>
              </ul>
            </nav>

            <div
              class="right-cta-menu text-right d-flex aligin-items-center col-6"
            >
              <div class="ml-auto">
                <a
                  href="post-job.html"
                  class="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                >
                  <span><i class="fa-solid fa-plus mx-2"></i></span>Post a Job</a
                >
                <a
                  href="./pages/login.html"
                  class="btn btn-primary border-width-2 d-none d-lg-inline-block"
                >
                  <span><i class="fa-solid fa-lock mx-2"></i></span>Log In</a
                >
              </div>
              <a
                href="#"
                class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
              >
                <span class="icon-menu h3 m-0 p-0 mt-2"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
    <section>
      <!-- Inside the <main> section -->
      <main>
        <div
          class="main-body"
          style="background-image: url('images/truck.jpg')"
        >
          <!-- Form to search for a driver -->
          <div class="search-form-container">
            <div class="custom-p mx-4">
              <div class="row justify-content-end">
                <div class="col-md-4 col-lg-4">
                  <div class="search-form bg-white p-4">
                    <h4 class="mb-4 text-center">Search for a Driver</h4>
                    <form id="searchForm">
                      <!-- Pickup Location -->
                      <div class="mb-3">
                        <label for="pickupLocation" class="form-label"
                          >Pickup Location</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="pickupLocation"
                          placeholder="Enter Pickup Location"
                        />
                        <div
                          class="error-message"
                          id="pickupLocationError"
                        ></div>
                      </div>

                      <!-- Destination -->
                      <div class="mb-3">
                        <label for="destination" class="form-label"
                          >Destination</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="destination"
                          placeholder="Enter Destination"
                        />
                        <div class="error-message" id="destinationError"></div>
                      </div>

                      <!-- Freight Weight -->
                      <div class="mb-3">
                        <label for="freightWeight" class="form-label"
                          >Freight Weight</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="freightWeight"
                          placeholder="Enter Freight Weight"
                        />
                        <div
                          class="error-message"
                          id="freightWeightError"
                        ></div>
                      </div>

                      <!-- Freight Type -->
                      <div class="mb-3">
                        <label for="freightType" class="form-label"
                          >Freight Type</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="freightType"
                          placeholder="Enter Freight Type"
                        />
                        <div class="error-message" id="freightTypeError"></div>
                      </div>

                      <!-- Delivery Date -->
                      <div class="mb-3">
                        <label for="deliveryDate" class="form-label"
                          >Delivery Date</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          id="deliveryDate"
                          placeholder="Enter Delivery Date"
                        />
                        <div class="error-message" id="deliveryDateError"></div>
                      </div>

                      <!-- Delivery Time -->
                      <div class="mb-3">
                        <label for="deliveryTime" class="form-label"
                          >Delivery Time</label
                        >
                        <input
                          type="time"
                          class="form-control"
                          id="deliveryTime"
                          placeholder="Enter Delivery Time"
                        />
                        <div class="error-message" id="deliveryTimeError"></div>
                      </div>

                      <button type="submit" class="btn btn-primary btn-block">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
<!-- Testimonials section -->
<section>
  <div class="bg-dark py-5">
      <div class="container">
          <div class="row testimonial-slider">
              <!-- Testimonial 1 -->
              <div class="testimonial col-md-4">
                  <div class="testimonial-content">
                      <div class="testimonial-icon">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                      <p class="description">
                          FindTruck made it easy for our logistics team to find reliable drivers for our shipments. The platform is user-friendly, and we appreciate the efficiency it brings to our operations.
                      </p>
                  </div>
                  <h3 class="title mt-2">Logistics Manager</h3>
                  <span class="post">ABC Logistics</span>
              </div>

              <!-- Testimonial 2 -->
              <div class="testimonial col-md-4">
                  <div class="testimonial-content">
                      <div class="testimonial-icon">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                      <p class="description">
                          As a truck driver, I've had a great experience with FindTruck. The platform connects me with relevant job opportunities, and the support team is always responsive to my needs.
                      </p>
                  </div>
                  <h3 class="title mt-2">John Doe</h3>
                  <span class="post">Professional Truck Driver</span>
              </div>

              <!-- Testimonial 3 -->
              <div class="testimonial col-md-4">
                  <div class="testimonial-content">
                      <div class="testimonial-icon">
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                      <p class="description">
                          FindTruck has transformed how we manage our freight. The range of available drivers and the simplicity of the platform make it an invaluable tool for our business.
                      </p>
                  </div>
                  <h3 class="title mt-2">Supply Chain Manager</h3>
                  <span class="post">XYZ Shipping</span>
              </div>
          </div>
      </div>
  </div>
</section>
<!-- Footer Section -->
<section>
  <footer class="bg-dark text-white">
    <div class="container py-5  border-top border-secondary">
      <div class="row">
        <!-- First Div -->
        <div class="col-md-3">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">FindTruck</a></li>
            <li><a class="text-white" href="#">Home</a></li>
            <li><a class="text-white" href="#">Our Services</a></li>
            <li><a class="text-white" href="#">About Us</a></li>
            <li><a class="text-white" href="#">Become a Driver</a></li>
          </ul>
        </div>

        <!-- Second Div -->
        <div class="col-md-3">
          <h5>Contact Us</h5>
          <p class="text-white">Have a question? Reach out!</p>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <!-- Third Div -->
        <div class="col-md-3">
          <h5>Follow Us</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">Instagram</a></li>
            <li><a class="text-white" href="#">Facebook</a></li>
            <li><a class="text-white" href="#">Twitter</a></li>
            <li><a class="text-white" href="#">WeChat</a></li>
          </ul>
        </div>

        <!-- Fourth Div -->
        <div class="col-md-3">
          <h5>Our Headquarters</h5>
          <h6>Main Street, deakin</h6>
        </div>
      </div>
    </div>

    <!-- Copyright and Last Update -->
    <div class="container text-center border-top border-secondary py-3">
      <p class="text-white">&copy; 2023 FindTruck. All rights reserved. Last update: January 15, 2023</p>
      <p class="text-white">Contact: <a href="mailto:support@findtruck.as.com">support@findtruck.as.com</a></p>
    </div>
  </footer>
</section>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.sticky.js"></script>
    <script src="js/main.js"></script>
    <script src="./main.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
  </body>
</html>

<!-- Login html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../fonts/icomoon/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css" integrity="sha384-BY+fdrpOd3gfeRvTSMT+VUZmA728cfF9Z2G42xpaRkUGu2i3DyzpTURDo5A6CaLK" crossorigin="anonymous">
  </head>

  <body>
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-3 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1
              class="my-5 display-5 fw-bold ls-tight"
              style="color: hsl(218, 81%, 95%)"
            >
              The best <br />
              <span style="color: hsl(171, 38%, 66%)"
                >for your trucking business</span
              >
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
              Experience the ease of trucking with FindTruck. Our platform
              simplifies your transportation needs, making it efficient and
              straightforward. We are dedicated to providing a hassle-free
              experience, ensuring your journey is smooth from start to finish.
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              class="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              class="position-absolute shadow-5-strong"
            ></div>

            <div class="card bg-glass">
              <div class="card-body px-4 py-4 px-md-5 mb-5">
                <form id="loginForm">
                  <div class="form-header">
                    <p>Please login to your account</p>
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="formEmail">Username</label>
                    <input
                      type="text"
                      id="username"
                      class="form-control"
                      placeholder="Phone number or email address"
                    />
                    <div class="error-message text-left" id="usernameError"></div>
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="formPassword"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="Enter password"
                    />
                    <div class="error-message text-left" id="passwordError"></div>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button
                      id="btn"
                      class="btn btn-primary btn-block mb-3"
                      type="button"
                      onclick="validateForm()"
                    >
                      Log in
                    </button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div
                    class="d-flex align-items-center justify-content-center pb-4"
                  >
                    <p class="mb-0 mx-2">Don't have an account?</p>
                    <a href="../pages/signup.html">
                      <button type="button" class="btn btn-outline-danger">
                        Create new
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer Section -->
<section>
  <footer class="bg-dark text-white">
    <div class="container py-5">
      <div class="row">
        <!-- First Div -->
        <div class="col-md-3">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">FindTruck</a></li>
            <li><a class="text-white" href="#">Home</a></li>
            <li><a class="text-white" href="#">Our Services</a></li>
            <li><a class="text-white" href="#">About Us</a></li>
            <li><a class="text-white" href="#">Become a Driver</a></li>
          </ul>
        </div>

        <!-- Second Div -->
        <div class="col-md-3">
          <h5>Contact Us</h5>
          <p class="text-white">Have a question? Reach out!</p>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <!-- Third Div -->
        <div class="col-md-3">
          <h5>Follow Us</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">Instagram</a></li>
            <li><a class="text-white" href="#">Facebook</a></li>
            <li><a class="text-white" href="#">Twitter</a></li>
            <li><a class="text-white" href="#">WeChat</a></li>
          </ul>
        </div>

        <!-- Fourth Div -->
        <div class="col-md-3">
          <h5>Our Headquarters</h5>
          <h6>Main Street, deakin</h6>
        </div>
      </div>
    </div>

    <!-- Copyright and Last Update -->
    <div class="container text-center border-top border-secondary py-3">
      <p class="text-white">&copy; 2023 FindTruck. All rights reserved. Last update: January 15, 2023</p>
      <p class="text-white">Contact: <a href="mailto:support@findtruck.as.com">support@findtruck.as.com</a></p>
    </div>
  </footer>
</section>
    <script src="../js/login.js"></script>
  </body>
</html>
<!-- Signup html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../fonts/icomoon/style.css" />
  </head>

  <body>
    <!-- Section: Design Block -->
    <section class="background-radial-gradient overflow-hidden">
      <div class="container px-4 py-3 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1
              class="my-5 display-5 fw-bold ls-tight"
              style="color: hsl(218, 81%, 95%)"
            >
              The best <br />
              <span style="color: hsl(171, 38%, 66%)"
                >for your trucking business</span
              >
            </h1>
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
              Experience the ease of trucking with FindTruck. Our platform
              simplifies your transportation needs, making it efficient and
              straightforward. We are dedicated to providing a hassle-free
              experience, ensuring your journey is smooth from start to finish.
            </p>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              class="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              class="position-absolute shadow-5-strong"
            ></div>

            <div class="card bg-glass">
              <div class="card-body px-4 py-3 px-md-5 mb-4">
                <form onsubmit="event.preventDefault(); validateSignupForm();">
                  <p>Please fill in the form below</p>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-group">
                        <label class="form-label" for="firstName"
                          >First name</label
                        >
                        <input
                          type="text"
                          id="firstName"
                          class="form-control"
                          placeholder="Enter first name..."
                        />
                        <div
                          class="error-message"
                          id="firstNameError"
                        ></div>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-group">
                        <label class="form-label" for="lastName"
                          >Last name</label
                        >
                        <input
                          type="text"
                          id="lastName"
                          class="form-control"
                          placeholder="Enter last name..."
                        />
                        <div class="error-message" id="lastNameError"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3"
                      >Email address</label
                    >
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      placeholder="Enter email"
                    />
                    <div class="error-message" id="emailError"></div>
                  </div>

                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      placeholder="Enter password"
                    />
                    <div class="error-message" id="passwordError"></div>
                  </div>

                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <label class="form-check-label mx-3" for="formCheckBox">
                      Subscribe to our newsletter
                    </label>
                    <input
                      class="form-check"
                      type="checkbox"
                      value=""
                      id="formCheckBox"
                    />
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <!-- Register buttons -->
                  <div class="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fa fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- Footer Section -->
<section>
  <footer class="bg-dark text-white">
    <div class="container py-5">
      <div class="row">
        <!-- First Div -->
        <div class="col-md-3">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">FindTruck</a></li>
            <li><a class="text-white" href="#">Home</a></li>
            <li><a class="text-white" href="#">Our Services</a></li>
            <li><a class="text-white" href="#">About Us</a></li>
            <li><a class="text-white" href="#">Become a Driver</a></li>
          </ul>
        </div>

        <!-- Second Div -->
        <div class="col-md-3">
          <h5>Contact Us</h5>
          <p class="text-white">Have a question? Reach out!</p>
          <form>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>

        <!-- Third Div -->
        <div class="col-md-3">
          <h5>Follow Us</h5>
          <ul class="list-unstyled">
            <li><a class="text-white" href="#">Instagram</a></li>
            <li><a class="text-white" href="#">Facebook</a></li>
            <li><a class="text-white" href="#">Twitter</a></li>
            <li><a class="text-white" href="#">WeChat</a></li>
          </ul>
        </div>

        <!-- Fourth Div -->
        <div class="col-md-3">
          <h5>Our Headquarters</h5>
          <h6>Main Street, deakin</h6>
        </div>
      </div>
    </div>

    <!-- Copyright and Last Update -->
    <div class="container text-center border-top border-secondary py-3">
      <p class="text-white">&copy; 2023 FindTruck. All rights reserved. Last update: January 15, 2023</p>
      <p class="text-white">Contact: <a href="mailto:support@findtruck.as.com">support@findtruck.as.com</a></p>
    </div>
  </footer>
</section>
    <script src="../js/signup.js"></script>
  </body>
</html>




  // Validate search driver form
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');

    form.addEventListener('submit', function (event) {
      let valid = true;

      // Reset previous error messages
      resetErrorMessages();

      // Validate Pickup Location
      const pickupLocation = document.getElementById('pickupLocation');
      if (!pickupLocation.value.trim()) {
        valid = false;
        displayError('pickupLocationError', 'Pickup Location is required');
      }

      // Validate Destination
      const destination = document.getElementById('destination');
      if (!destination.value.trim()) {
        valid = false;
        displayError('destinationError', 'Destination is required');
      }

      // Validate Freight Weight
      const freightWeight = document.getElementById('freightWeight');
      if (!freightWeight.value.trim()) {
        valid = false;
        displayError('freightWeightError', 'Freight Weight is required');
      }

      // Validate Freight Type
      const freightType = document.getElementById('freightType');
      if (!freightType.value.trim()) {
        valid = false;
        displayError('freightTypeError', 'Freight Type is required');
      }

      // Validate Delivery Time
      const deliveryTime = document.getElementById('deliveryTime');
      if (!deliveryTime.value.trim()) {
        valid = false;
        displayError('deliveryTimeError', 'Delivery Time is required');
      }

      // Prevent form submission if validation fails
      if (!valid) {
        event.preventDefault();
      }
    });

    function displayError(id, message) {
      const errorContainer = document.getElementById(id);
      errorContainer.textContent = message;
      errorContainer.style.color = 'red';
      errorContainer.style.fontStyle = 'italic';
    }

    function resetErrorMessages() {
      const errorContainers = document.querySelectorAll('.error-message');
      errorContainers.forEach(container => {
        container.textContent = '';
      });
    }
    
  });




// Validate signup form
function validateSignupForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("form3Example3").value;
    var password = document.getElementById("form3Example4").value;
  
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
  
    alert("Signup successful!");
  }
  


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
