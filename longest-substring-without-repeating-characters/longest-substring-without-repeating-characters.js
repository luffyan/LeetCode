/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {};
    
    var left = 0;
    var right = 0;
    
    var res = 0;
    while (right < s.length) {
        var r = s.charAt(right);
        map[r] ? map[r]++ : map[r] = 1
        
        while (map[r] > 1) {
            var l = s.charAt(left);
            map[l]--;
            left++
        }
        
        res = Math.max(res, right-left+1);
        
        right++;
    }
    
    return res;
};