/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    //jump from the last position, if sec to last can jump to last,
    //update sec to last to be last, check if third to last can jump to sec to last
    var lastPos = nums.length - 1;
    for(var i = lastPos; i >= 0; i--) {
        if(nums[i] + i >= lastPos) {   
            lastPos = i;
        }
    }
    return lastPos === 0;
}
    
    
    
    
    // starting from index 0, try all combos jumps, if can reach nums.length -1 pos, return true;(base case)
    // else return false;
//     var map = {};
//     var jumpHelper = (start) => {
//         if(map.hasOwnProperty(start)) {
//             return map[start];
//         }
//         if(start === nums.length-1) {
//             return true;
//         }
//         // check for boundary
//         var furthest = Math.min(nums[start] + start, nums.length-1);
        
//         for(var i = furthest; i > start; i--) {
//                 if(jumpHelper(i)) {
//                     map[start] = true;
//                     return true;
//                 }
//         }
//         map[start] = false;
//         return false;
//     }
//     return jumpHelper(0);
// };


// var canJump = function(nums) {
//     // var map = {};
//     // return canJumpFrom(0, nums, map);
    

// };

// DP = backtrack with memoization

// can jump to the end of the array
// var canJumpFrom = (pos, nums, map) => {
//     if(pos === nums.length-1) {
//         return true;
//     }
//     if(map[pos] !== undefined) {
//         return map[pos];
//     }
    
//     // furthest pos can be reached from curr pos
//     var furthest = Math.min(pos + nums[pos], nums.length-1);
    
//     for(var i = furthest; i > pos; i--) {
//         if(map[i]) {
//             return true;
//         }
//         if(canJumpFrom(i, nums, map)) {
//             map[pos] = true;
//             return true;
//         }
//     }
    
//     map[pos] = false;
//     return false;
// }