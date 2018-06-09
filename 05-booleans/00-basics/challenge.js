module.exports.inBetween = function (lower, middle, upper) {
    return middle > lower && middle < upper ? true : false;
};

module.exports.equalStrings = function (stringOne, stringTwo) {
    return stringOne === stringTwo ? true : false;
};

module.exports.notEqual = function (one, two) {
    return one === two ? false : true;
};

module.exports.outsideRanges = function (number) {
    return (number >= 10 && number <= 20) ? false :
        number > 42 && number <= 75 ? false :
        number > 1 && number < 6 ? false :
        true;
};

module.exports.nameAndPrice = function (name, price) {
    return name === 'LATimes' && price >= 1 || name === 'NYTimes' && price >= 1 ? true : false;
};