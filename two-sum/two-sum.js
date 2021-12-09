/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //iterate through the array,
    // if curr is the answer to prev numbers(in the map)
    // return curr idx, prev ind
    // map ={ ans: idx}, target-nums[idx] = ans
    var map = {};
    var result = [];
    for(var i = 0; i < nums.length; i++) {
        if(map.hasOwnProperty(target - nums[i])) {
            result.push(map[target - nums[i]]);
            result.push(i);
            return result;
        } else {
            map[nums[i]] = i;
        }
    }
};

//[2,7,11,15]  9
