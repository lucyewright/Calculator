import { getResult } from "./src/equalsClick";

let displayNum = "";
let storeSum = [];
let storeOperator = "";
let storeNum = "";
let decimal = "";

let display = document.getElementById("display");
let rt = document.getElementById("running");
console.log("test");
const clearDisplay = arg => {
  displayNum = "";
  storeSum = [];
  storeNum = "";
  storeOperator = "";
  decimal = "";
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

const numClick = e => {
  storeNum += e.target.value;
  storeSum += e.target.value;
  displayNum += e.target.value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  console.log(numButtons[i]);
  numButtons[i].addEventListener("click", numClick);
}

const pointOperator = (arg, e) => {
  if (displayNum === "") {
    arg += 0;
    arg += e.target.value;
    decimal += e.target.value;
    displayNum += 0;
    displayNum += decimal;
    storeSum += 0;
    storeSum += e.target.value;
  } else if (decimal === "") {
    arg += e.target.value;
    decimal += e.target.value;
    displayNum += decimal;
    storeSum += decimal;
  } else if (decimal.length > 0) {
    return;
  }
};

const decimalClick = e => {
  pointOperator(storeNum, e);
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let pointButton = document.getElementById("point");
pointButton.addEventListener("click", decimalClick);

const operatorClick = e => {
  displayNum = "";
  decimal = "";
  storeSum += e.target.value;
  storeOperator += e.target.value;
  display.innerHTML = displayNum;
};
let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  console.log(operatorButtons[i]);
  operatorButtons[i].addEventListener("click", operatorClick);
}

const equalsClick = arg => {
  let sumArr = sum.split("+", "-", "*", "/");
  console.log(sumArr);
  display.innerHTML = result;
  displayNum = "";
  storeOperator = "";
  storeSum = "";
};

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", equalsClick);

console.log(displayNum, storeSum, storeOperator, decimal);
