module.exports.stream = function stream(conditionalFN, actionFN) {
    let timer = 5;
    while (conditionalFN(timer)) {
        actionFN();
        timer--;
    }
};

module.exports.sumNumbers = function sumNumbers(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum;
};