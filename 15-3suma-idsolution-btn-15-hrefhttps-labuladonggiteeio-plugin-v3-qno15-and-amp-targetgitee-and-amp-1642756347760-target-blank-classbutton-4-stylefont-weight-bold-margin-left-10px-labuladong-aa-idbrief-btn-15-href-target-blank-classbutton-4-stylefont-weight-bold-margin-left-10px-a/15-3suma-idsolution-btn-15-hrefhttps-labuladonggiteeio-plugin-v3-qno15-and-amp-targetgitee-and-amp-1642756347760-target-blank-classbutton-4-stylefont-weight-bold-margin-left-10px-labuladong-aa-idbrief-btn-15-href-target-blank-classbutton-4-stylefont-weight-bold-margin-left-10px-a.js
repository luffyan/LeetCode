/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    //sort and two pointers
    //sort the array to remove dup
    //first for loop to choose the first number i;
        //iterate from i+1 to the end of the array, use two sum helper function, 
        //sum = target - first number at i;
        //for the next iteration, skip the same value using while loop
    var result = [];
    nums.sort((a, b) => (a-b));
    
    for(var i = 0; i < nums.length; i++) {
        if(i === 0 || nums[i-1] !== nums[i]) {
            var complement = 0-nums[i];
            twoSum(complement, i+1, nums, result);
        }
    }
    return result;
};

 //find two numbers sum to target, add them to result array
    var twoSum = function(target, start, nums, result) {
        var left = start, right = nums.length-1;
        while(left < right) {
            var sum = nums[left] + nums[right];
            if(sum === target) {
                result.push([nums[start-1], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] == nums[left-1]) left++;
                while (left < right && nums[right] == nums[right+1]) right--;
            } else if(sum > target) {//[1,2,3,3,3,3]
                right--;
            } else {
                left++;
            }
            
        }
    }

