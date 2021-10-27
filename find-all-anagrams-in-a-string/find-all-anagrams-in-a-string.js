/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    const need = {}, window = {};
    for(const char of p) {
        need[char] = need[char]+1 || 1;
    };
    
    let left = 0, right = 0;
    let match = 0;
    
    while(right < s.length) {
        
        let c1 = s[right];
        
        if (c1 in need) {
            window[c1] = window[c1]+1 || 1;
            if(window[c1] <= need[c1])
                match++;
        }
        right++;
        
        while(match === p.length) {
            let c2 = s[left];
            
            if(right - left === p.length) {
                res.push(left);
            }
            if(c2 in need) {
                window[c2]--;
                if(window[c2] < need[c2])
                    match--;
            }
            left++;
        }
    }
    return res;
};