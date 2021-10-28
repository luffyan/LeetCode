/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0, right = 0;
    let window = {};
    let target = {};
    let match = 0;
    for(let char of s1) {
        target[char] = target[char]+1 || 1;
    }
    
    while(right < s2.length) {
        let rightChar = s2[right];
        if(rightChar in target) {
            window[rightChar] = window[rightChar]+1 || 1;
            if(window[rightChar] <= target[rightChar]) {
                match++;   
            }
        }
        right++;
        while(match === s1.length) {
            let leftChar = s2[left];
            if(right - left === s1.length) {
                return true;
            }
            if(leftChar in target){
                window[leftChar]--;
                if(window[leftChar] < target[leftChar]){
                    match--;
                }
            }
            left++;
        }
    }
    return false;
};