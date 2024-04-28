const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const emptyUL = document.getElementById(`ingredients`);
console.log(emptyUL);

ingredients.forEach(ingredient => {
  console.log(ingredient);
  const listOfEmptyUl = document.createElement(`li`);
   console.log(listOfEmptyUl)
   listOfEmptyUl.textContent = ingredient;
  listOfEmptyUl.classList.add(`item`);
 
   emptyUL.appendChild(listOfEmptyUl);

  });