/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    //build a graph to create the from and to relationship
    var graph = [];
    for (var i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for(var prereq of prerequisites) {
        var from = prereq[1];
        var to = prereq[0];
        graph[from].push(to);
    }
    //[[1,2,3], [3,4],[5,6]]
    //dfs travser the graph
    //mark visited node to avoid dead loop
    //mark onPath to check if circle exists
    
    console.log(graph);
    var hasCircle = false;
    var onPath = new Array(numCourses);
    var visited = new Array(numCourses);
    var dfs = function(graph, i) {
        if(onPath[i]) {
            hasCircle = true;
        }
        if(hasCircle || visited[i]) {
            return;
        }
        visited[i] = true;
        onPath[i] = true;
        console.log(graph[i], i);
        for(var course of graph[i]) {
            dfs(graph, course);
        }
        onPath[i] = false;
    }
    
    for(var i = 0; i < numCourses; i++) {
        dfs(graph, i);
    }
    return !hasCircle;
};