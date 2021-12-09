/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslands = function(grid) {
    var count = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                findConnected(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

var findConnected = (grid, i, j) => {
    if (i < 0 || j < 0 || i === grid.length || j == grid[0].length || grid[i][j] === '0') {
        return;
    }
    
    if(grid[i][j] === '1') {
        grid[i][j] = '0';
        findConnected(grid, i+1, j);
        findConnected(grid, i-1, j);
        findConnected(grid, i, j+1);
        findConnected(grid, i, j-1);
    }
}
