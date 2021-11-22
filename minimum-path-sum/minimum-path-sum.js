/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    
    for(var i = 1; i < grid.length; i++) {
        grid[i][0] = grid[i-1][0] + grid[i][0];
    }
    for(var j = 1; j < grid[0].length; j++) {
        grid[0][j] = grid[0][j-1] + grid[0][j]; 
    }
    for(var i = 1; i < grid.length; i++) {
        for (var j = 1; j < grid[0].length; j++) {
            grid[i][j] = Math.min(grid[i][j-1], grid[i-1][j]) + grid[i][j];
        }
    }
    return grid[i-1][j-1];
};