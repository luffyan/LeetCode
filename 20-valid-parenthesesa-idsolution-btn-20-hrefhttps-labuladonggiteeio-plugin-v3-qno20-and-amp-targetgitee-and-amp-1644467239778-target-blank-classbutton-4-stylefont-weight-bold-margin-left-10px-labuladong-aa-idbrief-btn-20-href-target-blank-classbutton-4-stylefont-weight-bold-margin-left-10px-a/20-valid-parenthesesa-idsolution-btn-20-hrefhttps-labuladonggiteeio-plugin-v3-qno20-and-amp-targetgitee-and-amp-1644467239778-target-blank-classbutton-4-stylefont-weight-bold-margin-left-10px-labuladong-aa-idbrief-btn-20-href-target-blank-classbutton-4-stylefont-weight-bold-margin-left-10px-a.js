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
            let pop = stack.pop();
            if (map[pop] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};