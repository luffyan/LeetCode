/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var distinctIslands = new Set();
    for(i = 0; i < m; i++) {
        for(j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // var str1 = "";
                var str1 = {"str": ""};
                markZero(grid, i, j, str1, 1);
                // console.log("str: ", str1);
                distinctIslands.add(str1["str"]);
            }
        }
    }
    return distinctIslands.size;
};

var markZero = function(grid, i, j, str, dir) {
    var m = grid.length;
    var n = grid[0].length;
    
    if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
        return;
    }
    grid[i][j] = 0;
    
    str["str"] += dir.toString() + ",";
    // console.log("str 1: ", str);
    markZero(grid, i-1, j, str, 1);
    markZero(grid, i+1, j, str, 2);
    markZero(grid, i, j-1, str, 3);
    markZero(grid, i, j+1, str, 4);
    // console.log("str 2: ", str);
    str["str"] += (-dir).toString() + ",";
    // console.log("str 3: ", str);
}