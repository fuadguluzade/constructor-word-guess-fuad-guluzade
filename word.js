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
    var correct = false;
    for (var i = 0; i < this.letterArr.length; i++) {
        if (this.letterArr[i].checkLetter(ch))
            correct = true;
    }
    return correct;
}

Word.prototype.isFound = function () {
    var isFound = true;
    for (var i = 0; i < this.letterArr.length; i++) {
        if (!this.letterArr[i].hasGuessed) {
            isFound = false;
            return;
        }  
    }
    return isFound;
}

module.exports = Word;