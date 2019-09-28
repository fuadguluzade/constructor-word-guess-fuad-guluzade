var Letter = function (char) {
    this.char = char;
    this.hasGuessed = false;
}

Letter.prototype.toString = function () {
    if (this.hasGuessed == true) {
        return this.char;
    } else if (this.char == ' ') {
        this.hasGuessed = true;
        return ' ';
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