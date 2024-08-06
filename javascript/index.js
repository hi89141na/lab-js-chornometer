const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  // ==> BONUS
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  minDecElement.textContent = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.textContent = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  secDecElement.textContent = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.textContent = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  // For milliseconds, you would need to add the logic to handle milliseconds in `chronometer.js`
}

function printSplit() {
  const splitTime = chronometer.split();
  const li = document.createElement('li');
  li.className = 'list-item';
  li.textContent = splitTime;
  splitsElement.appendChild(li);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
});
