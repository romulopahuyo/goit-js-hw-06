
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Getting class of <button type="button" class="change-color">Change color</button>
  const changeColorButton = document.querySelector('.change-color');

//Getting class of <p>Background color: <span class="color">-</span></p>
  const colorSpan = document.querySelector('.color');

  changeColorButton.addEventListener('click', function() {
    // Get a random hex color using the getRandomHexColor function
    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });