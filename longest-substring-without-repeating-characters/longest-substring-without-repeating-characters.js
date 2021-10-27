/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var left = 0;
    var right = 0;
    var currLen = 0;
    var maxLen = 0;
    
    var map = {};
    
    while(right < s.length) {
        var currChar = s[right];
        map[currChar] = map[currChar]+1 || 1;
        right++;
        
        while (map[currChar] > 1) {
            map[s[left]]--;
            left++;
        }
        currLen = right - left;
        maxLen = Math.max(currLen, maxLen);
        
    }
    return maxLen;
};