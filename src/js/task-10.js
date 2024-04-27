function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Get attribute of <button type="button" data-create>Create</button>
  const btnCreate = document.querySelector('[data-create]');
//Get Attribute of <button type="button" data-destroy>Destroy</button>
  const btnDestroy = document.querySelector('[data-destroy]');
//Get the element <input type="number" min="1" max="100" step="1" />
  const inputElement = document.querySelector('input');
//Get the element DIV by id <div id="boxes"></div>
  const divBoxes = document.getElementById('boxes');

  btnCreate.addEventListener('click', createBoxes);
  btnDestroy.addEventListener('click', destroyBoxes);
  function createBoxes() {
    const amount = inputElement.value;
    // Clear previous boxes
    // destroyBoxes();

    // Create new boxes with background color and adding 10 px to previous
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const divBox = document.createElement('div');
      divBox.style.width = `${size}px`;
      divBox.style.height = `${size}px`;
      divBox.style.backgroundColor = getRandomHexColor();
      divBoxes.appendChild(divBox);
      size += 10;
    }
  }

  function destroyBoxes() {
    // Clear the contents of div#boxes once you click destroy button
    divBoxes.innerHTML = '';
    inputElement.value = '';
  }