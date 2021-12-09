/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // pick all alphnumeric characters, add them to a string
    var alphanumeric = '';
    
    // convert all uppercase to lowercase
    s = s.toLowerCase();
    for(var char of s) {
        if(char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0) || char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) {
            alphanumeric += char;
        }
    }

    //check if palindrome using two pointers
    // if not equal, return
    // two pointers meet, return true
    var left = 0, right = alphanumeric.length - 1;
    while(left < right) {
        if(alphanumeric.charAt(left) !== alphanumeric.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};