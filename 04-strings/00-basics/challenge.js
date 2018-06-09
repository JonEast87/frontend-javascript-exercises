module.exports.formLetter = function (firstName, senderName, message) {
    return `Hello ${firstName},\n\n${message}\n\nSincerely,\n${senderName}`;
};

module.exports.sliceItAndCombineIt = function (bigString, startA, endA, startB, endB) {
    return bigString.substring(startA, endA) + bigString.substring(startB, endB);
};

module.exports.findFirstMatch = function (text, searchString) {
    return text.search(searchString);
};

module.exports.findLastMatch = function (text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function (text, searchString) {
    const beginning = text.search(searchString);
    const ending = text.lastIndexOf(searchString);
    return text.substring(beginning, ending);
};