module.exports.createCourse = function createCourse(title, duration, students) {
    let course = new Object();
    course.title = "Full Stack Engineering";
    course.duration = "4 weeks";
    course.students = ['Rob', 'Tim', 'Joe'];
    return course;
};

module.exports.addProperty = function addProperty(obj, newProp, newValue) {
    return obj.hasOwnProperty(newProp) ? obj : obj[newProp] = newValue, obj;
};

module.exports.formLetter = function formLetter(obj) {
    return `Hello ${obj.recipient},\n\n${obj.msg}\n\nSincerely,\n${obj.sender}`;
};

module.exports.canIGet = function canIGet(item, money) {
    const priceTable = new Object();
    priceTable['MacBook Air'] = 999;
    priceTable['MacBook Pro'] = 1299;
    priceTable['Mac Pro'] = 2499;
    priceTable['Apple Sticker'] = 1;
    return priceTable[item] <= money;
};