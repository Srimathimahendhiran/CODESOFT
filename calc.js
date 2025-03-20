let currentInput = '';
let operator = '';
let firstOperand = null;

const display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  display.value = '';
}

// Function to set the operator (+, -, *, /)
function setOperator(op) {
  if (firstOperand === null) {
    firstOperand = currentInput;
  }
  operator = op;
  currentInput += ' ' + op + ' ';
  display.value = currentInput;
}

// Function to calculate the result
function calculateResult() {
  if (firstOperand !== null && operator !== '') {
    let secondOperand = currentInput.split(' ')[2];
    let result = 0;
    
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        if (secondOperand != 0) {
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
        } else {
          alert("Cannot divide by zero");
          return;
        }
        break;
      default:
        return;
    }
    display.value = firstOperand + ' ' + operator + ' ' + secondOperand + ' = ' + result;
    firstOperand = result;
    currentInput = '';
    operator = '';
  }
}
