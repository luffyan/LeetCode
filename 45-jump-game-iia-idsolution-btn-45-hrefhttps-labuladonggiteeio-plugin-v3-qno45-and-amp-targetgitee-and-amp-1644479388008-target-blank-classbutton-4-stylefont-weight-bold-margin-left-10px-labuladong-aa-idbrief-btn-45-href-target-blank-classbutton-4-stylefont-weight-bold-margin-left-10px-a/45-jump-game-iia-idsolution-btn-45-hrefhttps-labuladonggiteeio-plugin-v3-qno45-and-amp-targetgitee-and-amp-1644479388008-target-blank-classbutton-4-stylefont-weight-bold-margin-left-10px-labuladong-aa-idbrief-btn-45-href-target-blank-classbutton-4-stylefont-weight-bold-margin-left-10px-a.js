/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //做两件事情，1.jump ->当i到达了boundary的时候  2，set boundary, 需要计算currJumpEnd -> 由furthest决定
    var farthestIdx = 0, currentJumpEnd = 0, jumps = 0;
       for(var i = 0; i < nums.length - 1; i++) {
        
        //一直在计算目前能跳到的最远距离，就是next jump的end
        farthestIdx = Math.max(farthestIdx, i+nums[i]);
        if(i === currentJumpEnd) {//到达边界
            // make a new jump
            jumps++;
            // reset boundary 
            currentJumpEnd = farthestIdx;
        }
    }
    return jumps;  
}

// };

// [2,3,1,1,4]
// i = 0, < 4
// farthest = 2;
// nums[i] = 2
// end = 0
// jump = 0;

// jump = 1;
// end = 2;
// i = 1;
// farthest = 4;

// i = 2;
// farthest = 3;
// jump = 3;
// end = 3;

