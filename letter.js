var Letter = function (char) {
    this.char = char;
    this.hasGuessed = false;
}

Letter.prototype.toString = function () {
    if (this.hasGuessed == true) {
        return this.char;
    }
    return '_';
}

Letter.prototype.checkLetter = function (ch) {
    if (ch === this.char) {
        this.hasGuessed = true;
        return true;
    } 
}


module.exports = Letter;