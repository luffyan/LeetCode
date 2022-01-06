/**
 * @param {character[][]} grid
 * @return {number}
 */

//Number of islands, input: 2d, output: count
//O(M*N), O(M*N)
var numIslands = function(grid) {
    var count = 0;
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1'){
                findConnectedOnes(i, j, grid);
                count++;
            }
        }
    }
    return count;
}
    
    
var findConnectedOnes = function(row, col, array)  {
    if(row < 0 || row > array.length -1 || col < 0 || col > array[row].length - 1) {
        return;
    }
    if(array[row][col] === '1') {
        array[row][col] = '0';
        findConnectedOnes(row - 1, col, array);
        findConnectedOnes(row + 1, col, array);
        findConnectedOnes(row, col - 1, array);
        findConnectedOnes(row, col + 1, array);
    }   
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     var count = 0;
//     for (var i = 0; i < grid.length; i++) {
//         for (var j = 0; j < grid[0].length; j++) {
//             if(grid[i][j] === '1') {
//                 findConnected(grid, i, j);
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// //find an isalnd, use that as a root for dfs, mark all connected 0
// var findConnected = (grid, i, j) => {
//     if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === '0') {
//         return;
//     }
    
//     if(grid[i][j] === '1') {
//         grid[i][j] = '0';
//         findConnected(grid, i+1, j);
//         findConnected(grid, i-1, j);
//         findConnected(grid, i, j+1);
//         findConnected(grid, i, j-1);
//     }
// }
// ---------------------------------------------------------------
// // BFS iterative solution, M*N, M*N
// var numIslands = function(grid) {
//     if(grid === null || grid.length === 0) {
//         return 0;
//     }
//     var row = grid.length;
//     var col = grid[0].length;
//     var count = 0;
    
//     for(var i = 0; i < row; i++) {
//         for(var j = 0; j < col; j++) {
//             if(grid[i][j] === '1') {//perform a bfs
//                 count++;
//                 grid[i][j] = '0';
//                 var neighbours = [];
//                 neighbours.push([i, j]);// queue store横纵坐标
//                 while(neighbours.length !== 0) {
//                     var first = neighbours.pop();
//                     if(first[0] >= 1 && grid[first[0]-1][first[1]] === '1') {
//                         neighbours.push([first[0]-1, first[1]]);
//                         grid[first[0]-1][first[1]] = '0';
//                     }
//                     if(first[0] < row - 1 && grid[first[0]+1][first[1]] === '1') {
//                         neighbours.push([first[0]+1, first[1]]);
//                         grid[first[0]+1][first[1]] = '0';
//                     }if(first[1] >= 1 && grid[first[0]][first[1]-1] === '1') {
//                         neighbours.push([first[0], first[1]-1]);
//                         grid[first[0]][first[1]-1] = '0';
//                     }if(first[1] < col - 1 && grid[first[0]][first[1]+1] === '1') {
//                         neighbours.push([first[0], first[1]+1]);
//                         grid[first[0]][first[1]+1] = '0';
//                     }
//                 }
//             }
//         }
//     }
//     return count;
// }