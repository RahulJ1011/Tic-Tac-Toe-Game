let currentPlayer = 'X';
let finish = false;
let Validation = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
let initialValues = ['', '', '', '', '', '', '', '', ''];

const result = document.getElementById('result')
const handleClick = (value) => {
  if (!finish && initialValues[value] === '') {
    document.getElementById(value).innerText = currentPlayer;
    initialValues[value] = currentPlayer
    isWinner();
    changePlayer();
  }
};

const isWinner = () => {
  for (let num of Validation) {
    if (
      initialValues[num[0]] &&
      initialValues[num[1]] === initialValues[num[0]] &&
      initialValues[num[2]] === initialValues[num[0]]
    ) {
      result.innerText = `The winner is ${currentPlayer}`;
      finish = true;
      break;
    }
  }

  if (!initialValues.includes('') && !finish) {
    result.innerText = 'Game draw';
    finish = true;
  }
};

const changePlayer = () => {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
  currentPlayer = 'X';
  initialValues = ['', '', '', '', '', '', '', '', ''];
  result.innerHTML = '';
  finish = false;
  document.querySelectorAll('.box').forEach((value) => (value.innerText = ''));
};
