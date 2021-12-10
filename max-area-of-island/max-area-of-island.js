/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
        var max = 0;
        for(var i = 0; i < grid.length; i++) {
            for(var j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 1) {
                    max = Math.max(max, findIsland(grid, i, j));
                }
            }
        }
        return max;
};

var findIsland = (grid, i, j) => {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) {
        return 0;
    }
    if(grid[i][j] === 1) {
        grid[i][j] = 0;
        return 1+findIsland(grid, i-1, j)+findIsland(grid, i+1, j)+findIsland(grid, i, j+1)+findIsland(grid, i, j-1);
    }
}

// find all islands in the grid
// calculate the area for each island
// compare with max