/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    var visited = new Map();
    return deepCopy(head, visited);
};

function deepCopy(node, visited) {
    if (node === null) {
        return null;
    }
    
    if (visited.has(node)) {
        return visited.get(node);
    } 
    
    var newNode = new Node(node.val);
    console.log("newNode", newNode);
    visited.set(node, newNode);
    
    newNode.random = deepCopy(node.random, visited);
    newNode.next = deepCopy(node.next, visited);
    return newNode;
}