module.exports.getKeys = function getKeys(obj) {
    let array = new Array();
    for (let key in obj) {
        array.push(key);
    }
    return array;
};

module.exports.getValues = function getValues(obj) {
    let array = new Array();
    for (let key in obj) {
        array.push(obj[key]);
    }
    return array;
};

module.exports.objectToArray = function objectToArray(obj) {
    let array = new Array();
    for (let key in obj) {
        array.push(`${key} is ${obj[key]}`);
    }
    return array;
};