
//<input id="font-size-control" type="range" min="16" max="96" />
const fontSizeControl = document.getElementById('font-size-control');
//<span id="text">Abracadabra!</span>
const textSpan = document.getElementById('text');

  fontSizeControl.addEventListener('input', function() {
    // Get the value from the font-size-control input
    const fontSize = fontSizeControl.value + 'px';

    // adjust the font size of the text element when scrolling
    textSpan.style.fontSize = fontSize;
  });