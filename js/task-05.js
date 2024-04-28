//<input type="text" id="name-input" placeholder="Please enter your name" />
const inName = document.getElementById('name-input');
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const outName = document.getElementById('name-output');

  inName.addEventListener('input', function(event) {
    // Get the current value of the input
    const inValue = event.target.value;

    // If the input is empty, the span should display the "Anonymous" string.
    outName.textContent = inValue ? inValue : 'Anonymous';
});