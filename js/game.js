// criando um array com 9 posições que se referem aos quadrados do tabuleiro
let board = ['', '', '', '', '', '', '', '', ''];

// vez do jogador sendo 0 ou 1, começando pelo 0
let playerTime = 0;

// símbolos do jogo
let symbols = ['O', 'X'];

let count = 0;

// variável para finalizar jogo
let gameOver = false;

let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// colcoar símbolo dentro do elemento
function handleMove(position) {
  // verifica se o jogo acabou para evitar que continue jogando
  if (gameOver) {
    return;
  }

  // verificar se o espaço clicado é igual a vazio
  if (board[position] == '') {
    // colocar o símbolo referente ao jogador da vez
    board[position] = symbols[playerTime];

    // verifica se teve algum vencedor
    gameOver = isWin();

    if (!gameOver) {
      // para mudar a vez do jogador
      playerTime = playerTime == 0 ? 1 : 0;
    }
    return gameOver;
  }
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ''
    ) {
      return true;
    }
  }

  return false;
}


  function resetGame(){
    window.location.reload(true);
  }

function gameOld(){
  count++;

  if(count == 9){
    setTimeout(() => {
      alert("O jogo acabou - deu velha!");
    }, 10)

    count = 0;
  }
}