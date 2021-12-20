/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    var ans = 0;
    if (s.length === 1) {return 0;}
    var group = [];
    var count = 1;
    for(var i = 1; i < s.length; i++) {
        if(s[i] === s[i-1]){//01
            count++;
        } else {
            group.push(count);
            count = 1;
        }
    }
    group.push(count);
    console.log(group);
    for(var i = 0; i < group.length-1; i++) {
        ans += Math.min(group[i], group[i+1]);
    }
    return ans;
        
};