window.onload = function() {
  var board = document.querySelector('.board-game');
  board.addEventListener('clic', addX);
};

var centinel = true;
function addX(event) {
  if (event.target.matches('td') && event.target.textContent === '') {
    if (centinel)
      event.target.textContent = 'X';
    else 
      event.target.textContent = 'O';

    centinel = !centinel;
  };
};