/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var left = 0, right = s.length-1;
    while(left < right) {
        if(s[left] !== s[right]) {
            // if we found a pair not equal to each other, check the substring betwn them by removing one of them respectively
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
        }
        left++; 
        right--;
    }
    return true;
    
};

var isPalindrome = function(s, start, end) {
    while(start < end) {
        if(s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}