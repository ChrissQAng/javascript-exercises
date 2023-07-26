const reverseString = function(string) {
    let newStr = "";
    let selChar = "";
    for (let i = 0; i <= string.length; i++) {
        selChar = string.slice(string.length -1-i, string.length - i);
        newStr += selChar;
    }
return newStr;
};

// Do not edit below this line
module.exports = reverseString;
