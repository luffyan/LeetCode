/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var newMatrix = [].concat(...matrix);
    var start = 0;
    var end = newMatrix.length - 1;
    
    while(start + 1 < end) {
        var mid = Math.floor(start + (end-start)/2);
        if(newMatrix[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    return newMatrix[start] === target || newMatrix[end] === target;
};