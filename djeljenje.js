// division.js

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return a / b;
}

// Export the divide function as a module
module.exports = divide;
