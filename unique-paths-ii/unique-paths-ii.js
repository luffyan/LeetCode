/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    
    if(obstacleGrid[0][0] === 1 || m === 0 || n === 0) return 0;
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(i === 0 && j === 0) {
                obstacleGrid[i][j] = 1;
            } else if(i === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i][j-1];
            } else if(j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i-1][j];
            } else {
                obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : (obstacleGrid[i][j-1] + obstacleGrid[i-1][j]);
            }
        }
        
    }
    return obstacleGrid[i-1][j-1];
};