let displayNum = "";
let storeNum = "";
let storeSum = "";
let storeOperator = "";
let decimal = "";
let lastClicked = "";

let display = document.getElementById("display");
let rt = document.getElementById("running");

// TODO: When adding +/- button use Math.abs() to get from negative to positive.

const clearDisplay = arg => {
  displayNum = "";
  storeSum = "";
  storeNum = "";
  storeOperator = "";
  decimal = "";
  lastClicked = "";
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

const numClick = e => {
  displayNum = "";
  storeOperator = "";
  if (storeNum.length < 10) {
    storeNum += e.target.value;
    storeSum += e.target.value;
    displayNum += e.target.value;
  } else {
    displayNum = "MAX LIMIT";
  }
  lastClicked = e.target.value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", numClick);
}

// TODO: add conditions for 0

const pointOperator = (num, e) => {
  if (displayNum === "") {
    num += 0;
    num += e.target.value;
    decimal += e.target.value;
    displayNum += 0;
    displayNum += decimal;
    storeSum += 0;
    storeSum += e.target.value;
  } else if (decimal === "") {
    num += e.target.value;
    decimal += e.target.value;
    displayNum += decimal;
    storeSum += decimal;
  }
};

const decimalClick = e => {
  pointOperator(storeNum, e);
  lastClicked = e.target.value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let pointButton = document.getElementById("point");
pointButton.addEventListener("click", decimalClick);

const operatorClick = e => {
  if (storeOperator === "") {
    displayNum = e.target.value;
    decimal = "";
    storeNum = "";
    storeSum += e.target.value;
    storeOperator += e.target.value;
  }
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorClick);
}

const equalsClick = sum => {
  console.log(storeSum.length);
  console.log(storeSum.split("+", "-", "x", "÷"));
  if (lastClicked !== "+" || "-" || "x" || "÷") {
    storeSum.split("+", "-", "x", "÷");
  }
  displayNum = storeSum;
  storeNum = "";
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
