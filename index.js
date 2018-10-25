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
  if (entry === "+" || entry === "-" || entry === "x" || entry === "/") {
    return true;
  }
  return false;
};

const numClick = e => {
  let value = e.target.value;

  if (isOperator(lastClicked)) {
    displayNum = "";
  } else if (lastClicked === "=") {
    resetStore();
  }
  if (displayNum === "0") {
    displayNum = "";
  }
  if (displayNum.length < 10) {
    displayNum += value;
  }
  console.log(displayNum);
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum.join(" ") + displayNum;
  lastClicked = value;
};

let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", numClick);
}

const operatorClick = e => {
  storeSum.push(displayNum);
  let value = e.target.value;
  if (storeOperator === "") {
    displayNum = value;
    decimal = "";
    if (value === "+" || value === "-" || value === "x") {
      storeSum.push(value);
    } else if (value === "÷") {
      storeSum.push("/");
    }
    storeOperator = value;
  }
  console.log(displayNum);
  lastClicked = value;
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
  console.log(displayNum);
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum.join(" ") + displayNum;
};

let point = document.getElementById("point");
point.addEventListener("click", decimalClick);

const equalsClick = () => {
  storeSum.push(displayNum);
  displayNum = equals(storeSum);
  display.innerHTML = displayNum;
  storeSum = "";
  storeOperator = "";
  decimal = "";
};

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", equalsClick);

// TODO: Use toFixed() to limit number of decimal places
// let fixed = (0.1 + 0.2).toFixed(6);
// console.log(fixed);
// let reduce = Number(fixed).toPrecision(2);
// console.log(reduce);
// TODO: work out how many 0's at the end, reduce to length - that many.
