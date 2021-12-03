/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var result = '';
    for (var char of s) {
        var res = '';
        var multi = 0;
        var stack_multi = [];
        var stack_res = [];
        
        for(var c of s) {
            if(c >= '0' && c <= '9') {
                multi = multi*10 + parseInt(c);
            }else if(c === '[') {
                stack_multi.push(multi);
                stack_res.push(res);
                multi = 0;
                res = '';
            }else if(c === ']') {
                var temp = '';
                var currMulti = stack_multi.pop();
                for(var i = 0; i < currMulti; i++) {
                    temp += res;
                }
                res = stack_res.pop() + temp;
            }else {
                res += c;
            }
        }
    }
    return res;
};