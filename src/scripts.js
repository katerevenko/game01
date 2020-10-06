// TODO: не использовать в HTML тег `onclick`,
// использовать вместо него события:
// https://learn.javascript.ru/introduction-browser-events#addeventlistener

// TODO: вынести получение элементов `img` за пределы функции `start`.
// Пояснение: getElementById можно сделать один раз и использовать результат,
// а сейчас у тебя при каждом запуске игры, скрипт заново ищет эти блоки на странице.

// TODO: исправить имена переменных:
// - для бота: botScore, botHandName, botImage и т. д.
// - для игрока: playerScore, playerHandName, playerImage и т. д.

let imgs = [
  'lizard',
  'paper',
  'rock',
  'scissors',
  'spock'
];
let resH = 0;
let resC = 0;
function start(handName) {
  document.getElementById('hand').src = '/img/' + handName + '.png'

  let rNum = randomInteger(0, 4)
  let compNmme = imgs[rNum];
  let result;
  document.getElementById('compHand').src = '/img/' + compNmme + '.png'
  if (handName === compNmme) {
    result = 0
  } else if (handName === 'lizard' && (compNmme === 'scissors' || compNmme === 'rock')) {
    result = -1
  } else if (handName === 'paper' && (compNmme === 'scissors' || compNmme === 'lizard')) {
    result = -1
  } else if (handName === 'rock' && (compNmme === 'paper' || compNmme === 'spock')) {
    result = -1
  } else if (handName === 'scissors' && (compNmme === 'rock' || compNmme === 'spock')) {
    result = -1
  } else if (handName === 'spock' && (compNmme === 'lizard' || compNmme === 'paper')) {
    result = -1
  } else {
    result = 1
  }
  // TODO: менять только цифры, текст не трогать внутри скриптов!
  if (result === 1) {
    document.getElementById('result').innerText = 'ты блять победил'
    document.getElementById('resNumH').innerText = 'Player:' + (++resH)
  } else if (result === -1) {
    document.getElementById('result').innerText = 'ты пидор'
    document.getElementById('resNumC').innerText = 'Computer:' + (++resC)
  } else {
    document.getElementById('result').innerText = 'fu'
  }
};








function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
