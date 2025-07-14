// ==============================
// AstersTech Web Demo - script.js
// ==============================

// ---------- Section 1: Button Click Example ----------

// This function is called when the "Click Me" button is clicked
function handleClick() {
    // Get the <p> element with id="message"
    const messageElement = document.getElementById('message');
  
    // Update the text of the <p> element
    messageElement.textContent = 'You clicked the button! 🎉';
  
    // This shows how we manipulate DOM elements (text, style, etc.)
    console.log("Button clicked!"); // Good for debugging
  }
  
  
  
  // ---------- Section 2: Form Submission + Input Handling ----------
  
  // Step 1: Get the form element
  const form = document.getElementById('greetingForm');
  
  // Step 2: Attach an event listener for form submission
  form.addEventListener('submit', function (event) {
    // Prevent the page from refreshing (default behavior of forms)
    event.preventDefault();
  
    // Step 3: Get the value from the text input field
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim(); // Remove extra whitespace
  
    // Step 4: Select the output <p> tag
    const output = document.getElementById('greetingOutput');
  
    // Step 5: Use conditionals to respond differently depending on input
    if (name !== '') {
      // Use string interpolation to create a dynamic message
      output.textContent = `Hello, ${name}! Welcome to AstersTech 👋`;
  
      // Optional: Clear the input field after submit
      nameInput.value = '';
    } else {
      output.textContent = 'Please enter your name.';
    }
  
    // Step 6: Use console.log for debugging
    console.log('Form submitted with name:', name);
  });
  
