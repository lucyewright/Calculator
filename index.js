import { equals } from "./calculate";

let displayNum = "";
let storeSum = [];
let storeOperator = "";
let decimal = "";
let lastClicked = "";

let display = document.getElementById("display");
let rt = document.getElementById("running");

// TODO: When adding +/- button use Math.abs() to get from negative to positive.

const clearDisplay = arg => {
  resetStore();
  lastClicked = "";
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

const resetStore = () => {
  displayNum = "";
  storeSum = [];
  storeOperator = "";
  decimal = "";
};

const isOperator = entry => {
  if (entry === "+" || entry === "-" || entry === "x" || entry === "÷") {
    return true;
  }
  return false;
};

const numClick = e => {
  let value = e.target.value;
  storeOperator = "";
  if (isOperator(lastClicked)) {
    displayNum = "";
  }
  if (lastClicked === "=") {
    resetStore();
    display.innerHTML = displayNum;
    rt.innerHTML = storeSum;
  }
  if (displayNum === "0") {
    displayNum = "";
  }
  if (displayNum.length < 10) {
    displayNum += value;
  }
  lastClicked = value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum.join(" ") + displayNum;
};

let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", numClick);
}

const operatorClick = e => {
  if (!isOperator(lastClicked)) {
    storeSum.push(displayNum);
  }
  let value = e.target.value;
  lastClicked = value;
  if (storeOperator === "") {
    storeOperator = value;
    displayNum = storeOperator;
    decimal = "";
    storeSum.push(value);
  }
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum.join(" ");
};

let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorClick);
}

const decimalClick = e => {
  if (displayNum === "") {
    lastClicked = e.target.value;
    decimal += e.target.value;
    displayNum += 0;
    displayNum += decimal;
  } else if (decimal === "") {
    lastClicked = e.target.value;
    decimal += e.target.value;
    displayNum += decimal;
  }
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum.join(" ") + displayNum;
};

let point = document.getElementById("point");
point.addEventListener("click", decimalClick);

const equalsClick = e => {
  storeSum.push(displayNum);
  displayNum = equals(storeSum);
  let answer = Number(displayNum).toFixed(8);
  display.innerHTML = Number(answer).toPrecision();
  lastClicked = e.target.value;
  storeSum = [];
  storeOperator = "";
  decimal = "";
};

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", equalsClick);
