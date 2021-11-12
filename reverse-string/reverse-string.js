/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var len = s.length;
    var i = 0;
    while(i < Math.floor(len/2)) {
        swap(i, len-1-i, s);
        i++;
    }
    return s;
};

var swap = function(idx1, idx2, str) {
    var temp = str[idx1];
    str[idx1] = str[idx2];
    str[idx2] = temp;
}