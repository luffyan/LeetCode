/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0;
    let longest = 0;
    
    let window = {};
    
    while(right < s.length) {
        let rightChar = s[right];
        window[rightChar] = window[rightChar]+1 || 1;
        right++;
        
        while(window[rightChar] > 1) {
            let leftChar = s[left];
            window[leftChar]--;
            left++;
        }
        let currLen = right - left;
        longest = Math.max(currLen, longest);
    }
    return longest;
};
