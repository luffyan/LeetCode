/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //用双指针做palindrome
    //iterate through the string
    //find longest palindrome with center at l, r
    //when l = r, same center
    //when l+1 = r, two centers
    var longest = '';
    for(var i = 0; i < s.length; i++) {
        var odd = isPalindrome(s, i, i);
        var even = isPalindrome(s, i, i+1);
        longest = longest.length > odd.length ? longest : odd;
        longest = longest.length > even.length ? longest : even;
    }
    return longest;
};

var isPalindrome = function(s, l, r) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return s.substring(l+1, r);
}