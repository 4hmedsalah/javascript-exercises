const fibonacci = function (count) {
    if (count < 0) return "ERROR";
    if (count === 0) return 0;

    let previousNumber = 0;
    let currentNumber = 1;

    for (let i = 2; i <= count; i++) {
        let nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
