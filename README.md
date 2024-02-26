```
<!-- post-job.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Quicksand:400,600,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../fonts/icomoon/style.css" />
    <link rel="stylesheet" href="../css/owl.carousel.min.css" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/owl.theme.min.css" />

    <!-- Style -->
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../styles/testimonials.css" />
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
              <a href="../index.html">FindTruck</a>
            </div>

            <nav class="mx-auto site-navigation">
              <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li>
                  <a href="../index.html" class="nav-link active">Home</a>
                </li>
                <li><a href="./about-us.html">About</a></li>
                <li class="has-children">
                  <a href="../main.html"
                    >Available Drivers
                    <span></ispan
                  ></a>
                  <ul class="dropdown">
                    <li><a href="../main.html">All Drivers</a></li>
                    <li><a href="single-truck.html">Single Truck</a></li>
                    <li>
                      <a href="special-truck.html">Special Purpose Truck</a>
                    </li>
                  </ul>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="d-lg-none">
                  <a href="../pages/post-job.html"
                    ><span class="mr-2"><i class="fa-solid fa-lock"></i></span>
                    Post a Job</a
                  >
                </li>
                <li class="d-lg-none">
                  <span class="icon-lock"></span
                  ><a href="../login.html">Log In</a>
                </li>
              </ul>
            </nav>

            <div
              class="right-cta-menu text-right d-flex aligin-items-center col-6"
            >
              <div class="ml-auto">
                <a
                  href="./post-job.html"
                  class="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                >
                  <span><i class="fa-solid fa-plus mr-2"></i></span>Post a
                  Job</a
                >
                <a
                  href="./login.html"
                  class="btn btn-primary border-width-2 d-none d-lg-inline-block"
                >
                  <span><i class="fa-solid fa-lock mr-2"></i></span>Log In</a
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
          style="background-image: url('../images/truck.jpg')"
        >
          <!-- Form to post a job -->
          <div class="post-job-form-container pb-4">
            <div class="custom-p mx-4">
              <div class="row justify-content-end">
                <div class="col-md-4 col-lg-4">
                  <div class="post-job-form bg-white p-4 rounded">
                    <h4 class="mb-4 text-center">Post a Job</h4>
                    <form id="postJobForm" onsubmit="return validatePostJobForm()" action="/submit-form" >
                      <!-- Customer Name -->
                      <div class="mb-3">
                        <label for="customerName" class="form-label">Your Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="customerName"
                          placeholder="Enter Your Name"
                        />
                        <div class="error-message" id="customerNameError"></div>
                      </div>
        
                      <!-- Phone Number -->
                      <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input
                          type="tel"
                          class="form-control"
                          id="phone"
                          placeholder="Enter Phone Number"
                        />
                        <div class="error-message" id="phoneError"></div>
                      </div>
        
                      <!-- Email -->
                      <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter Email Address"
                        />
                        <div class="error-message" id="emailError"></div>
                      </div>
        
                      <!-- Freight Type -->
                      <div class="mb-3">
                        <label for="freightType" class="form-label">Freight Type</label>
                        <input
                          type="text"
                          class="form-control"
                          id="freightType"
                          placeholder="Enter Freight Type"
                        />
                        <div class="error-message" id="freightTypeError"></div>
                      </div>
        
                      <!-- Freight Weight -->
                      <div class="mb-3">
                        <label for="freightWeight" class="form-label">Freight Weight</label>
                        <input
                          type="text"
                          class="form-control"
                          id="freightWeight"
                          placeholder="Enter Freight Weight"
                        />
                        <div class="error-message" id="freightWeightError"></div>
                      </div>
        
                      <!-- Destination -->
                      <div class="mb-3">
                        <label for="destination" class="form-label">Destination</label>
                        <input
                          type="text"
                          class="form-control"
                          id="destination"
                          placeholder="Enter Destination"
                        />
                        <div class="error-message" id="destinationError"></div>
                      </div>
        
                      <!-- Cargo Location -->
                      <div class="mb-3">
                        <label for="cargoLocation" class="form-label">Cargo Location</label>
                        <input
                          type="text"
                          class="form-control"
                          id="cargoLocation"
                          placeholder="Enter Cargo Location"
                        />
                        <div class="error-message" id="cargoLocationError"></div>
                      </div>
        
                      <!-- Job Description -->
                      <div class="mb-3">
                        <label for="jobDescription" class="form-label">Job Description</label>
                        <textarea
                          class="form-control"
                          id="jobDescription"
                          rows="3"
                          placeholder="Enter Job Description"
                        ></textarea>
                        <div class="error-message" id="jobDescriptionError"></div>
                      </div>
        
                      <!-- Special Case -->
                      <div class="mb-3">
                        <label for="specialCase" class="form-label">Any Special Case</label>
                        <input
                          type="text"
                          class="form-control"
                          id="specialCase"
                          placeholder="Enter Special Case"
                        />
                      </div>
        
                      <!-- Estimated Cost -->
                      <div class="mb-3">
                        <label for="estimatedCost" class="form-label">Estimated Cost</label>
                        <input
                          type="text"
                          class="form-control"
                          id="estimatedCost"
                          placeholder="Enter Estimated Cost"
                        />
                        <div class="error-message" id="estimatedCostError"></div>
                      </div>
        
                      <button type="submit" class="btn btn-primary btn-block">Post Job</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
    <!-- Footer Section -->
    <section>
      <footer class="bg-dark text-white">
        <div class="container py-5 border-top border-secondary">
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
          <p class="text-white">
            &copy; 2023 FindTruck. All rights reserved. Last update: January 15,
            2023
          </p>
          <p class="text-white">
            Contact:
            <a href="mailto:support@findtruck.as.com"
              >support@findtruck.as.com</a
            >
          </p>
        </div>
      </footer>
    </section>
    <!-- Modal -->
    <div class="modal fade" id="jobModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Job Details</h5>
          </div>
          <div class="modal-body" id="modalContent">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Close</button>
            <button type="button" class="btn btn-primary" onclick="editData()">Save changes</button>
          </div>          
        </div>
      </div>
    </div>
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.sticky.js"></script>
    <script src="../js/main.js"></script>
    <!-- <script src="../main.js"></script> -->
    <script src="../js/post-job.js"></script>
    <script src="../js/owl.carousel.min.js"></script>
  </body>
</html>




//signup 
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
      label{
        color: hsl(171, 38%, 66%) 
      }
    </style>
</head>

<body>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden">
    <div class="container px-4 py-3 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            The best <br />
            <span style="color: hsl(171, 38%, 66%)">for your trucking business</span>
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
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

          <div class="card bg-glass">
            <div class="card-body px-4 py-3 px-md-5 mb-4">
              <form onsubmit="event.preventDefault(); validateSignupForm();">
                <p style="color: hsl(171, 38%, 66%)">Please fill in the form below</p>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label class="form-label" for="firstName">First name</label>
                      <input type="text" id="firstName" class="form-control" placeholder="Enter first name..." />
                      <div class="error-message" id="firstNameError"></div>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label class="form-label" for="lastName">Last name</label>
                      <input type="text" id="lastName" class="form-control" placeholder="Enter last name..." />
                      <div class="error-message" id="lastNameError"></div>
                    </div>
                  </div>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="formEmail">Email address</label>
                  <input type="email" id="formEmail" class="form-control" placeholder="Enter email" />
                  <div class="error-message" id="emailError"></div>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="formPassword">Password</label>
                  <input type="password" id="password" class="form-control" placeholder="Enter password" />
                  <div class="error-message" id="passwordError"></div>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <label class="form-check-label mx-3" for="formCheckBox">
                    Subscribe to our newsletter
                  </label>
                  <input class="form-check" type="checkbox" value="" id="formCheckBox" />
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa-brands fa-facebook"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa-brands fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa-brands fa-twitter"></i>
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
                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
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
  <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">You have successfully signed up</h5>
          
        </div>
        <div class="modal-body" id="signupModalContent">
          <p>Your details are:</p>
          <!-- Modal content will be dynamically populated here -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
  <script src="../js/jquery-3.3.1.min.js"></script>
  <script src="../js/popper.min.js"></script>
  <script src="../js/bootstrap.min.js"></script>
  <script src="../js/jquery.sticky.js"></script>
  <script src="../js/main.js"></script>  
  <script src="../js/signup.js"></script>
</body>

</html>
```