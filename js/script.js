function validateForm() {
    // Get the name input element by its ID
    const nameInput = document.getElementById('name-input');

    // Check if the name input field is empty
    if (nameInput.value === '') {
        // Alert the user that the form cannot be empty
        alert('Form cannot be empty!');
    } else {
        // If the input is valid, get the result-form element by its ID
        const result = document.getElementById('result-form');
        // Update the text content of the result-form element with a greeting message
        // The message includes the value entered in the name input field
        result.textContent = `Hello, ${nameInput.value}! Your message has been sent.`;}}