/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.size = 0;
    this.capacity = capacity;
    var head = null;
    var tail = null;
};

var Node =  function(key, value, next = null, prev = null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var existingNode = this.map[key];
    if(existingNode) {
        var value = existingNode.value;
        this.put(key, value);
        return value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
//put a new pair at the head of DLL, why DLL?
LRUCache.prototype.put = function(key, value) {
    var existingNode = this.map[key];
    if(existingNode) {
        //detach existing node
        this.detach(existingNode);  
        this.size--;
    } else if(this.size === this.capacity){
        //delete from map
        console.log(this.tail.key);
        delete this.map[this.tail.key];
        //detach from doubly LL
        this.detach(this.tail);
        this.size--;
    } 
    //put node to head
    if(!this.head) {
        this.head = this.tail = new Node(key, value);
    } else {
        var newNode = new Node(key, value, this.head);
        this.head.prev = newNode;
        this.head = newNode;
    }
    this.map[key] = this.head;
    this.size++;    
};


LRUCache.prototype.detach = function(node) {
    // if(node === this.head) {
    //     this.head = node.next;
    //     // this.head.prev = null;
    //     // node.next = null;
    // } else if(node === this.tail) {
    //     this.tail = node.prev;
    //     // this.tail.next = null;
    //     // node.prev = null;
    // } else {
    //     node.prev.next = node.next;
    //     node.next.prev = node.prev;
    //     // node.next = null;
    //     // node.prev = null;
    // }
    if(node.prev !== null) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }
    
    if(node.next !== null) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
}







/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */























