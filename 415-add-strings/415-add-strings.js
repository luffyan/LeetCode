/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    //use two pointers to iterate from right to left
    //if one str is shorter than the other, use 0 to calculate sum
    var carry = 0;
    var sum = [];
    var p1 = num1.length - 1;
    var p2 = num2.length - 1;
    while(p1 >= 0 || p2 >= 0 || carry !== 0) {
        var digit1 = p1 < 0 ? 0 : num1[p1] - '0';
        var digit2 = p2 < 0 ? 0 : num2[p2] - '0';
        var currSum = digit1 + digit2 + carry;
        sum.push(currSum % 10);
        carry = Math.floor(currSum / 10);
     
        p1--;
        p2--;
    }
    return sum.reverse().join('');
};