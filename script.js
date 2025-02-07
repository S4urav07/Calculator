function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function deleteLast() {
  const display = document.getElementById("display");
  if (display.innerText.length === 1) {
      display.innerText = "0";
  } else {
      display.innerText = display.innerText.slice(0, -1);
  }
}

function appendNumber(number) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
      display.innerText = number;
  } else {
      display.innerText += number;
  }
}

function appendOperator(operator) {
  const display = document.getElementById("display");
  const lastChar = display.innerText.slice(-1);
  if (!isNaN(lastChar) || lastChar === '.') {
      display.innerText += operator;
  }
}

function calculate() {
  const display = document.getElementById("display");
  try {
      display.innerText = eval(display.innerText);
  } catch (e) {
      display.innerText = "Error";
  }
}
