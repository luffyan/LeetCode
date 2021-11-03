/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    for(let char of s) {
        if(char in map) {
            stack.push(char);
        } else {
            let pop = stack.splice(-1);
            if (map[pop] !== char) {
                return false;
            }
        }
    }
    if (stack.length !== 0) return false;
    return true;
};