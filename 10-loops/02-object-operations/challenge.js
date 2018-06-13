module.exports.copy = function copy(obj) {
    const copiedObject = Object.assign({}, obj);
    return copiedObject;
};

module.exports.extend = function extend(dest, src) {
    dest = Object.assign(dest, src);
    return dest;
};

module.exports.hasElems = function hasElems(obj, array) {
    for (let i = 0; i < array.length; i++) {
        if (!obj.hasOwnProperty(array[i])) return false;
    }
    return true;
};