let displayNum = "";
let storeNum = "";
let storeSum = [];
let storeOperator = "";
let decimal = "";
let lastClicked = "";

let wholeNum = "";

let display = document.getElementById("display");
let rt = document.getElementById("running");

// TODO: When adding +/- button use Math.abs() to get from negative to positive.

const clearDisplay = arg => {
  displayNum = "";
  storeSum = [];
  storeNum = "";
  storeOperator = "";
  decimal = "";
  wholeNum = "";
  lastClicked = "";
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearDisplay);

const numClick = e => {
  if (lastClicked === "+") {
    displayNum = "";
  } else if (lastClicked === "-") {
    displayNum = "";
  } else if (lastClicked === "x") {
    displayNum = "";
  } else if (lastClicked === "÷") {
    displayNum = "";
  } else if (lastClicked === "=") {
    displayNum = "";
    storeNum = "";
    storeSum = [];
    decimal = "";
    storeOperator = "";
  }
  if (storeNum.length < 10) {
    storeNum += e.target.value;
    storeSum.push(e.target.value);
    displayNum += e.target.value;
  } else {
    displayNum = "MAX LIMIT";
  }
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
  lastClicked = e.target.value;
};

let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", numClick);
}

// TODO: add conditions for 0

const operatorClick = e => {
  storeSum.push(wholeNum);
  console.log(wholeNum);
  if (storeOperator === "") {
    displayNum = e.target.value;
    decimal = "";
    storeNum = "";
    if (e.target.value === "+" || "-") {
      storeSum.push(e.target.value);
    } else if (e.target.value === "x") {
      storeSum.push("*");
    } else if (e.target.value === "÷") {
      storeSum.push("/");
    }
    storeOperator += e.target.value;
  }
  lastClicked = e.target.value;
  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let operatorButtons = document.getElementsByClassName("action");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorClick);
}

const decimalClick = e => {
  wholeNum = displayNum;
  if (displayNum === "") {
    lastClicked = e.target.value;
    storeNum += 0;
    storeNum += e.target.value;
    decimal += e.target.value;
    displayNum += 0;
    displayNum += decimal;
    storeSum.push(0);
    storeSum.push(e.target.value);
  } else if (decimal === "") {
    lastClicked = e.target.value;
    storeNum += e.target.value;
    decimal += e.target.value;
    displayNum += decimal;
    storeSum.push(decimal);
  }

  display.innerHTML = displayNum;
  rt.innerHTML = storeSum;
};
let pointButton = document.getElementById("point");
pointButton.addEventListener("click", decimalClick);

export const calculate = (num1, o, num2) => {
  let n1 = Number(num1);
  let n2 = Number(num2);
  switch (o) {
    case "+": {
      return n1 + n2;
    }
    case "-": {
      return n1 - n2;
    }
    case "x": {
      return n1 * n2;
    }
    case "/": {
      return n1 / n2;
    }
    default: {
      return undefined;
    }
  }
};

const equalsClick = sum => {
  calculate(n1, o, n2);
  display.innerHTML = displayNum;
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
