module.exports.addItem = function addItem(lastItem, array) {
    if (array.indexOf(lastItem) === -1) {
        array.push(lastItem);
        return array;
    }
    return array;
};

module.exports.reverseSortedList = function reverseSortedList(array) {
    return array.sort().reverse();
};