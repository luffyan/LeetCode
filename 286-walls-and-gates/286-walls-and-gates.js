/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const INF = 2147483647;
    // var queue = [cell1Bottom, cell1Right,cell2Top...];
    // var pop = gate2;
    //mark all the available spots(empty space) depth+1
    //base case: check idx out of bounds
    //if current cell is empty
    //avoid dead loop, mark visited, update cell value = depth
    //only visit empty cells and mark them
    var m = rooms.length;
    var n = rooms[0].length;
    var queue = [];
    //add all the gates to queue
    for(var i = 0; i < m; i++) {
        for(var j = 0; j < n; j++) {
            if(rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }
    var directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while(queue.length !== 0) {
        var curr = queue.shift();
        //check all four directions of the current, check if out of bounds
        for(var dir of directions) {
            var x = curr[0] + dir[0];
            var y = curr[1] + dir[1];
            //if empty, we mark depth
            if(x >= 0 && y >= 0 && x < m && y < n && rooms[x][y] === INF) {
                rooms[x][y] = rooms[curr[0]][curr[1]]+1;
                queue.push([x, y]);
            }
        }
    }
    return rooms;
};