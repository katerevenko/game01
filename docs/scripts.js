let handNames = [
  'lizard',
  'paper',
  'rock',
  'scissors',
  'spock'
];

const botImage = document.getElementById('botImage');
const playerImage = document.getElementById('playerImage');
const botScoreEl = document.getElementById('botScore');
const playerScoreEl = document.getElementById('playerScore');
const res = document.getElementById('result');
const line = document.getElementById('line');
const tablo = document.getElementById('tablo');
let result;
let playerScore = 0;
let botScore = 0;

handNames.forEach((item) => {
  document.getElementById(item).addEventListener('click', () => start(item));
})

function start(playerHandName) {

  let rNum = randomInteger(0, 4)
  let botHandName = handNames[rNum];

  playerImage.src = 'img/' + playerHandName + '.png'
  botImage.src = 'img/' + botHandName + '.png'

  if (playerHandName === botHandName) {
    result = 0
  } else if (playerHandName === 'lizard' && (botHandName === 'scissors' || botHandName === 'rock')) {
    result = -1
  } else if (playerHandName === 'paper' && (botHandName === 'scissors' || botHandName === 'lizard')) {
    result = -1
  } else if (playerHandName === 'rock' && (botHandName === 'paper' || botHandName === 'spock')) {
    result = -1
  } else if (playerHandName === 'scissors' && (botHandName === 'rock' || botHandName === 'spock')) {
    result = -1
  } else if (playerHandName === 'spock' && (botHandName === 'lizard' || botHandName === 'paper')) {
    result = -1
  } else {
    result = 1
  }

  if (result === 1) {
    line.style.backgroundColor = 'green'
    tablo.style.borderColor = 'green'
    playerScoreEl.innerText = (++playerScore)
  } else if (result === -1) {
    line.style.backgroundColor = 'red'
    tablo.style.borderColor = 'red'
    botScoreEl.innerText = (++botScore)
  } else {
    line.style.backgroundColor = 'pink'
    tablo.style.borderColor = 'pink'
  }
};

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
