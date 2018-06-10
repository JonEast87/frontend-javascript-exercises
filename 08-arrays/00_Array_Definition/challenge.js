module.exports.newArray = function newArray(item, item2, item3, item4) {
    let array = new Array(item, item2, item3, item4);
    return array;
};

module.exports.firstAndLast = function firstAndLast(arr) {
    let array = new Array(arr.shift(), arr.pop());
    return array;
};