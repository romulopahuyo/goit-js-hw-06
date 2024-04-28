{/* <input type="text" id="validation-input" data-length="6" placeholder="Please enter 6 symbols"/> */}
const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', function() {
    // Get the expected length from the data-length attribute that is 6
    const expectedLength = parseInt(validationInput.getAttribute('data-length'),10);
    // Get the actual length of the input value
    const actualLength = validationInput.value.length;

    // Check if the actual length matches the expected length
    if (actualLength === expectedLength) {
      // If it matches, add the 'valid' class and remove the 'invalid' class
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      // If it doesn't match, add the 'invalid' class and remove the 'valid' class
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  });