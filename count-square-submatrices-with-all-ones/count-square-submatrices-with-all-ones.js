/**
 * @param {number[][]} matrix
 * @return {number}
 */
//dp
//第一行和第一列先确定好
//每一个cell的结果取决于他的上，左， 和斜上，（他们四个组成一个方块）

var countSquares = function(matrix) {
    var count = 0;
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[0].length; j++) {
            if(i === 0 || j === 0) {
                count += matrix[i][j];
                continue;
            }
            if(matrix[i][j] === 1) {
                var top = matrix[i-1][j];
                var left  = matrix[i][j-1];
                var topLeft = matrix[i-1][j-1];
                matrix[i][j] = Math.min(top, left, topLeft) + 1;
                count += matrix[i][j];
            }
        }  
    }
    return count;
};
  