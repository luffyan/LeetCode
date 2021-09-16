/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parens = [];
    
    function generate(leftCount, rightCount, result) {
        if (rightCount === n) {
            parens.push(result);
        }
        if (leftCount < n) {
            generate(leftCount+1, rightCount, result + "(");
        }
        if (leftCount > rightCount) {
            generate(leftCount, rightCount+1, result + ")");
        }
    }
    generate(0, 0, "");
    return parens;
};