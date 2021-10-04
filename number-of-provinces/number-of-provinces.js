/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    var count = 0;
    let visited = new Array(isConnected.length).fill(0);
    for (let i = 0; i < isConnected.length; i++) {
        if (visited[i] === 0) {
            dfs(isConnected, i, visited);
            count++;
        }
    }
    return count;
    
};

var dfs = function (isConnected, i, visited) {
    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[i][j] === 1 && visited[j] === 0) {
            visited[j] = 1;
            dfs(isConnected, j, visited);
        }
    }
}