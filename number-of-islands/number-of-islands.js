/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   
    var num = 0;
    var nrow = grid.length;
    var ncol = grid[0].length;
    for (var i = 0; i < nrow; i++) {
        for (var j = 0; j < ncol; j++) {
             if(grid[i][j] === "1") {
                num++;
                sink(grid, i, j);
            }
        }
    }
    return num;
};

var sink = function(grid, row, col) {
    var nrow = grid.length;
    var ncolumn = grid[0].length;
    
    if(row < 0 || col < 0 || row === nrow || col=== ncolumn || grid[row][col] === "0") {
        return;
    }
    grid[row][col] = "0";
    sink(grid, row-1, col);
    sink(grid, row, col-1);
    sink(grid, row, col+1);
    sink(grid, row+1, col);    
}