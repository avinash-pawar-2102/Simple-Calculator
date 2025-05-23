let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (endsWithOperator()) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    display.value = currentInput;
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function endsWithOperator() {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(currentInput.slice(-1));
}