// reagir a eventos de clique

// quando o jogo for carregado executa essa função
document.addEventListener('DOMContentLoaded', () => {
  // pegar todos os elementos referente a essa classe
  let squares = document.querySelectorAll('.square');

  // adicionar eventos quando for clicado
  squares.forEach(square => {
    // quando clicar nos squares, será executado a função handleClick
    square.addEventListener('click', handleClick);
  });
});

function handleClick(event) {
  // é o elemento que sofreu a ação
  let square = event.target;

  // pegar o id do elemento que sofreu a ação, colocando na variável
  let position = square.id;

  // chama a função que vai colocar o símbolo do jogador da vez na posição clicada
  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        alert('O jogo acabou - O vencedor foi o jogador 1');
        return;
      }

      alert('O jogo acabou - O vencedor foi o jogador 2');
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());

  // pega o símbolo
  let symbol = board[position];

  // coloca o símbolo no quadrado clicado
  square.innerHTML = `<div class='${symbol}'></div>`;
}
