/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    var sum = 0;
    var len = s.length;
    var shifted = "";
    for (var i = len-1; i >= 0; i--) {
        sum += shifts[i];
        shifted = String.fromCharCode((s[i].charCodeAt(0) + sum - "a".charCodeAt(0)) % 26 + "a".charCodeAt(0)) + shifted;
        //shifted = String.fromCharCode(s[i].charCodeAt(0) + sum) +shifted;
        
    }
    return shifted;
};