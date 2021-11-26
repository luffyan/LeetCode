/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function(nums) {
    var map = {};
    return canJumpFrom(0, nums, map);
    
};

// can jump to the end of the array
var canJumpFrom = (pos, nums, map) => {
    if(pos === nums.length-1) {
        return true;
    }
    if(map[pos] !== undefined) {
        return map[pos];
    }
    
    // furthest pos can be reached from curr pos
    var furthest = Math.min(pos + nums[pos], nums.length-1);
    
    for(var i = pos + 1; i <= furthest; i++) {
        if(map[i]) {
            return true;
        }
        if(canJumpFrom(i, nums, map)) {
            map[pos] = true;
            return true;
        }
    }
    map[pos] = false;
    return false;
}