document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('searchForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for now

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

    // If form is valid, proceed to fetch and show modal
    if (valid) {
      const searchUrl = '/search-driver';
      const formData = new FormData(form);

      fetch(searchUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
        .then(response => response.json())
        .then(data => {
          // Show the modal with the list of drivers
          displayDriverModal(data.drivers);
        })
        .catch(error => {
          console.error('Error during search:', error);
        });
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

  function displayDriverModal(drivers) {
    // Create the modal HTML
    const modalHTML = `
      <div class="modal fade" id="driverModal" tabindex="-1" aria-labelledby="driverModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="driverModalLabel">Available Drivers</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Driver Name</th>
                    <th scope="col">Freight Type</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Request</th>
                  </tr>
                </thead>
                <tbody>
                  ${drivers.map((driver, index) => `
                    <tr>
                      <th scope="row">${index + 1}</th>
                      <td>${driver.firstName} ${driver.lastName}</td>
                      <td>${driver.freightType}</td>
                      <td>${driver.phone}</td>
                      <td><button class="btn btn-primary" onclick="requestDriver(${driver.id})">Request</button></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  
    // Initialize the Bootstrap modal
    const driverModal = new bootstrap.Modal(document.getElementById('driverModal'));
  
    // Show the modal
    driverModal.show();
  }
  
  // Function to handle driver request
  window.requestDriver = function (driverId) {
    // Implement the logic for driver request here
    console.log('Requesting driver with ID:', driverId);

    const driverModal = new bootstrap.Modal(document.getElementById('driverModal'));
    driverModal.hide();
  };
});
