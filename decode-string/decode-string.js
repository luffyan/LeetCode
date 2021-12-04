/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var stack_multi = [];
    var stack_res = [];
    var multi = 0;
    var res = '';
    
    for(var char of s) {
        if(char >= '0' && char <= '9') {
            multi = multi * 10 + parseInt(char);
        } else if (char === '[') {
            stack_multi.push(multi);
            stack_res.push(res);
            res = '';
            multi = 0;
        } else if (char === ']') {
            var temp = '';
            var num = stack_multi.pop();
            for(var i = 0; i < num; i++) {
                temp += res;
            }
            res = stack_res.pop() + temp;
        } else {
            res += char;
        }
        
    }
    return res;
};