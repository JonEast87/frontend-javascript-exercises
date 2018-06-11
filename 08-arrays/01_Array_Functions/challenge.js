module.exports.reversePlusOne = function reversePlusOne(array) {
    let reversedArray = array.slice().reverse();
    reversedArray.unshift(1);
    return reversedArray;
};

module.exports.plusesEverywhere = function plusesEverywhere(array) {
    let add = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            add += array[i];
            return add;
        }
        add += array[i] + '+';
    }
    return add;
};

module.exports.arrayQuantityPlusOne = function arrayQuantityPlusOne(array) {
    return array.length + 1;
};