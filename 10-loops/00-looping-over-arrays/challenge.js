module.exports.sumNumbers = function sumNumbers(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b);
};

module.exports.splitAndLowerCaseString = function splitAndLowerCaseString(inputString) {
    return inputString.toLowerCase().split(',');
};

module.exports.addIndex = function addIndex(array) {
    let stringArr = new Array();
    array.forEach((element, index) => stringArr.push(`${index} is ${element}`));
    return stringArr;
};