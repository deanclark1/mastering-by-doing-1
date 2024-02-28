let buffer = "";
let runningTotal = 0;
let previousOperator;
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".button");

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNUmber(value);
  }
  rerender();
}

function handleNUmber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer = buffer + number;
  }
}

function handleMath(value) {
  if (buffer === 0) {
    //do nothing
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = "0";
  console.log(runningTotal);
}
function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      break;
    case "=":
      if (previousOperator === null) {
        //need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "×":
    case "÷":
    case "-":
      handleMath(symbol);
      break;
    default:
      break;
  }
}

function init() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      buttonClick(e.target.textContent);
    });
  }
}

function rerender() {
  screen.textContent = buffer;
}
init();
