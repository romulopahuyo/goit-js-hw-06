let counterValue = 0;

//<button type="button" data-action="decrement"> -1 </button>
    const btnDec = document.querySelector('[data-action = "decrement"]');

//<button type="button" data-action = "increment"> +1 </button>
     const btnInc = document.querySelector('[data-action = "increment"]');

//<span id="value">0</span>
    const valueSpan = document.getElementById('value');

 //Add click event listeners to the buttons
  btnDec.addEventListener('click', function() {
     counterValue--;
    valueSpan.textContent = counterValue;   });

  btnInc.addEventListener('click', function() {
     counterValue++;
    valueSpan.textContent = counterValue;
  });

