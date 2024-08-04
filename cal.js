document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';

    const appendToDisplay = (input) => {
        if (['+', '-', '*', '/'].includes(input)) {
            if (currentInput !== '' && currentOperator === '') {
                previousInput = currentInput;
                currentInput = '';
                currentOperator = input;
            } else if (currentOperator !== '' && currentInput !== '') {
                previousInput = operate(currentOperator, parseFloat(previousInput), parseFloat(currentInput)).toString();
                currentOperator = input;
                currentInput = '';
                display.value = previousInput;
            }
        } else {
            currentInput += input;
            display.value = currentInput;
        }
    };

    const cleardisplay = () => {
        currentInput = '';
        currentOperator = '';
        previousInput = '';
        display.value = '';
    };

    const calculate = () => {
        if (currentOperator !== '' && currentInput !== '') {
            currentInput = operate(currentOperator, parseFloat(previousInput), parseFloat(currentInput)).toString();
            display.value = currentInput;
            currentOperator = '';
            previousInput = '';
        }
    };

    const operate = (operator, a, b) => {
        if (operator === '+') {
            return a + b;
        } else if (operator === '-') {
            return a - b;
        } else if (operator === '*') {
            return a * b;
        } else if (operator === '/') {
            return a / b;
        }
        return b;
    };

    // Attach functions to window so they can be called from HTML
    window.appendToDisplay = appendToDisplay;
    window.cleardisplay = cleardisplay;
    window.calculate = calculate;
});
