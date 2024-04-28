 const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form elements using the elements property of the form
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    // Check if any of the fields are empty
    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
      alert('All fields must be filled in.');
    } else {
      // Create an object with field names as properties and field values as values
      const formData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      // Display the object with entered data in the console
      console.log(formData);

      // Clear the form fields once submitted
      loginForm.reset();
    }
  });
