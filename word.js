var letter = require('./letter.js');

var Word = function (w) {
    this.letterArr = [];
    for (var i = 0; i < w.length; i++) {
        this.letterArr.push(new letter(w[i]));
    }
}

Word.prototype.getWord = function () {
    var word = '';
    for (var i = 0; i < this.letterArr.length; i++) {
        word += this.letterArr[i] + " ";
    }
    return word;
}

Word.prototype.checkPresence = function (ch) {
    for (var i = 0; i < this.letterArr.length; i++) {
        this.letterArr[i].checkLetter(ch);
    }
}

module.exports = Word;