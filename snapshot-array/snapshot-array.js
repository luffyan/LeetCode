/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.array = new Array(length).fill(0);
    this.id = 0;
    // this.map = {};
    this.changed = {};
    this.history = [];

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    //this.array[index] = val;
    this.changed[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    //TLE
    // this.map[this.id] = this.array.slice();
    // this.id++;
    // return this.id - 1;

    for(var idx in this.changed) {
       
        if(!this.history[idx]) {
            this.history[idx] = {};
        }
        this.history[idx][this.id] = this.changed[idx];

    }
    
    changed = {};
    this.id++;
    return this.id - 1;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    //TLE
    // if(!this.map.hasOwnProperty(snap_id) || this.map[snap_id][index] === undefined) {//tricky
    //     return null;
    // }
    // return this.map[snap_id][index];
    if(this.history[index] === undefined) {
    // console.log(this.history[index]);
        return this.array[index];
    } else {
        //console.log(this.history[index]);
        if(this.history[index][snap_id] === undefined) {
            return this.array[index];
        } else {
            return this.history[index][snap_id];
        }
    }

};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */