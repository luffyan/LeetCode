/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hLen = haystack.length;
    const nLen = needle.length;
    
    if(nLen === 0) {
        return 0;
    }
    if(hLen === 0) {
        return -1;
    }
    
    for(let i = 0; i + nLen <= hLen; i++) {
        let flag = true;
        for(let j = 0; j < nLen; j++) {
            if(haystack[i+j] !== needle[j]) {
                flag = false;
                break;
            }
        }
        if(flag) return i;
    }
    return -1;
};