/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //------------------------------hashmap---------------------------------------
    //iterate through the array,
    // if curr is the answer to prev numbers(in the map)
    // return curr idx, prev ind
    // map ={ ans: idx}, target-nums[idx] = ans
    // var map = {};
    // var result = [];
    // for(var i = 0; i < nums.length; i++) {
    //     var complement = target - nums[i];
    //     if(map.hasOwnProperty(complement)) {
    //         result.push(map[complement]);
    //         result.push(i);
    //         return result;
    //     } else {
    //         map[nums[i]] = i;
    //     }
    // }
    //-------------two pointers-------------------
    
    //need to record original index, store as a pair
    //[[0,2],[1,7],[2,11],[3,15]]
    //then we can sort the array 
    var pairs= [];
    for(var i = 0; i < nums.length; i++) {
        pairs.push([i, nums[i]]);
    }
    pairs.sort((a, b) => (a[1]-b[1]));
    
    var left = 0, right = nums.length-1;
    while(left < right) {
        var sum = pairs[left][1] + pairs[right][1];
        if(sum === target) {
            return [pairs[left][0], pairs[right][0]];
        } else if(sum > target) {
            right--;
        } else {
            left++;
        }
    }
};

//[2,7,11,15]  9
