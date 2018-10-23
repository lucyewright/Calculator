let displayNum = "";
let storeSum = [];
let storeOperator = "";
let storeNum = "";
let decimal = "";

let display = document.getElementById("display");
let rt = document.getElementById("running");

// TODO: When adding +/- button use Math.abs() to get from negative to positive.

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
  if (storeNum.length < 15) {
    storeNum += e.target.value;
    storeSum += e.target.value;
    displayNum += e.target.value;
  }
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", numClick);
}

// TODO: add conditions for 0

const pointOperator = (arg, e) => {
  if (storeNum < 14) {
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
    }
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
  storeNum = "";
  storeSum += e.target.value;
  storeOperator += e.target.value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorClick);
}

const equalsClick = sum => {
  let sumArr = sum.split("+", "-", "*", "/");
  displayNum = "";
  storeOperator = "";
  storeSum = "";
};

// TODO: Use toFixed() to limit number of decimal places
// let fixed = (0.1 + 0.2).toFixed(6);
// console.log(fixed);
// let reduce = Number(fixed).toPrecision(2);
// console.log(reduce);
// TODO: work out how many 0's at the end, reduce to length - that many.

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", equalsClick);
