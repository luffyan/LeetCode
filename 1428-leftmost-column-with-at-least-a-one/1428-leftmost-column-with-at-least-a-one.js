/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    //[0001
    // 0001]
    //binary search and keep track of min
    //[idx1
    // idx2]
    //return min
    var rows = binaryMatrix.dimensions()[0];
    var cols = binaryMatrix.dimensions()[1];
    
    //perform bs for each row, record the min col
    var minCol = Number.MAX_VALUE;
    for(var row = 0; row < rows; row++) {
        minCol = Math.min(minCol, binarySearch(0, cols-1, row, binaryMatrix));
    }
    return minCol === cols ? -1 : minCol;
};
//binary search: mid compare with target
var binarySearch = function(left, right, row, matrix) {
    while(left + 1 < right) {
        var mid = Math.floor((right+left)/2);
        if(matrix.get(row, mid) === 0) {
            left = mid;
        } else {
            right = mid;
        }
    }
    if(matrix.get(row, left) === 1) {
        return left;
    } else if(matrix.get(row, right) === 1) {
        return right;
    } else {
        return matrix.dimensions()[1];
    }
}