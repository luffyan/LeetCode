/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var n = triangle.length;
    var map = [];
    for(var i = 0; i < triangle.length; i++) {
        var temp = [];
        for(var j = 0; j < triangle[i].length; j++) {
            temp.push(-1);
        }
        map.push(temp);
    }
    const dfs = (x, y, sum) => {
        if(x === n) {
           return 0;
        }
        if(map[x][y] !== -1) {
            return map[x][y];
        }
        map[x][y] = Math.min(dfs(x+1, y), dfs(x+1, y+1)) + triangle[x][y];
        return map[x][y];
    }
    return dfs(0, 0, 0);
    
};