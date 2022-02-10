/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    // 记录后序遍历结果
    var postorder = [];
    // 记录是否存在环
    var hasCycle = false;
    var visited = new Array(numCourses);
    var onPath = new Array(numCourses);
    
    var graph = buildGraph(numCourses, prerequisites);
    visited = new Array(numCourses);
    onPath = new Array(numCourses);
    
    //遍历图
    var traverse = function(graph, s) {
        if (onPath[s]) {
            // 发现环
            hasCycle = true;
        }
        if (visited[s] || hasCycle) {
            return;
        }
        // 前序遍历位置
        onPath[s] = true;
        visited[s] = true;
        for (var t of graph[s]) {
            traverse(graph, t);
        }
        // 后序遍历位置
        postorder.push(s);
        onPath[s] = false;
    }
    
    // 遍历图
    for (var i = 0; i < numCourses; i++) {
        traverse(graph, i);
        // 有环图无法进行拓扑排序
    if (hasCycle) {
        return [];
    }
    }
    
    // 逆后序遍历结果即为拓扑排序结果
    postorder.reverse();
    // var res = new int[numCourses];
    // for (int i = 0; i < numCourses; i++) {
    //     res[i] = postorder.get(i);
    // }
    return postorder;
}

// 建图函数
var buildGraph = function(numCourses, prerequisites) {
    var graph = [];
    for (var i = 0; i < numCourses; i++) {
        graph.push([]);
    }
    for(var prereq of prerequisites) {
        var from = prereq[1];
        var to = prereq[0];
        graph[from].push(to);
    }
    return graph;
}