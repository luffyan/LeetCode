/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    var parents = [];
    var weights = [];
    for(var i = 1; i <= n; i++) {
        parents[i] = i;
        weights[i] = 1;
    }
    
    function union(a, b) {
        var rootA = find(a);
        var rootB = find(b);
        
        if(rootA === rootB){
            return;
        }
        if(weights[a] > weights[b]) {
            parents[rootB] = rootA;
            weights[rootA] += weights[rootB];
        }else{
            parents[rootA] = rootB;
            weights[rootB] += weights[rootA];
        }
    }
    // find root, 只有root等于自己的parent
    function find(a) {
        while(a !== parents[a]) {
            parents[a] = parents[parents[a]];
            a = parents[a];
        }
        return a;
    }
    
    function isConnected(a, b) {
        return find(a) === find(b);
    }
    
    //sort the array based on cost
    connections.sort((a, b) => (a[2] - b[2]));
    
    //keep track of the total edges to check if all cities are connected in the end
    var edges = 0;
    var cost = 0;
    for(var i = 0; i < connections.length; i++) {
        var a = connections[i][0];
        var b = connections[i][1];
        //do not add the edge from a to b if already connected
        if(isConnected(a, b)) {
            continue;
        }
        union(a, b);
        cost += connections[i][2];
        edges++;
    }
    
    if(edges === n - 1) {
        return cost;
    }
    return -1;
};