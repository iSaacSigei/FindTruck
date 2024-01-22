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
