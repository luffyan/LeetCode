/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var farthest = 0, currentJumpEnd = 0, jumps = 0;
       for(var i = 0; i < nums.length - 1; i++) {
        //find the farthest position i can jump at start position i (), mark the farthest position as end;
        //在这个从start 到end的范围里找到我能跳到的最远的地方，因为必须要跳到这个范围里，所以jump++，
          //从start到end找最远的过程，顺便i走到了end, end更新成下一步最远的地方
           //这样又有了一个新的范围，再找farthest
        farthest = Math.max(farthest, i+nums[i]);
        if(i === currentJumpEnd) {
            // make a new jump
            jumps++;
            // reset boundary 
            currentJumpEnd = farthest;
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

