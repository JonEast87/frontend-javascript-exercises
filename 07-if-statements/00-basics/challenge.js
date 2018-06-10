module.exports.favoriteNumber = function favoriteNumber(favoriteNumber, guess) {
    return guess > favoriteNumber ? 'Too high' :
        guess < favoriteNumber ? 'Too low' :
        guess === favoriteNumber ? 'You got it!' :
        false;
};

module.exports.checkLock = function checkLock(first, second, third, fourth) {
    return ((first === 3 || first === 5 || first === 7) && (second === 2) && (third >= 5 && third <= 100) && (fourth < 9 || fourth > 20)) ? 'correct' : 'incorrect';
};

module.exports.canIGet = function canIget(item, money) {
    return ((item === 'MacBook Air' && money >= 999) || (item === 'MacBook Pro' && money >= 1299) || (item === 'Mac Pro' && money >= 2499) || (item === 'Apple Sticker' && money >= 1)) ? true : false;
};