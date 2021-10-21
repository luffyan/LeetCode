/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var arr = [];
    for (var i = 0; i < m; i++) {
        var temp = [];
        for (var j = 0; j < n; j++) {
            temp.push(0);
        }
        arr.push(temp);
    }
    
    
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0) {
                arr[i][j] = 1;
                continue;
            }
            if (j === 0) {
                arr[i][j] = 1;
                continue;
            }
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
                
        }
    }
    return arr[m-1][n-1];
};