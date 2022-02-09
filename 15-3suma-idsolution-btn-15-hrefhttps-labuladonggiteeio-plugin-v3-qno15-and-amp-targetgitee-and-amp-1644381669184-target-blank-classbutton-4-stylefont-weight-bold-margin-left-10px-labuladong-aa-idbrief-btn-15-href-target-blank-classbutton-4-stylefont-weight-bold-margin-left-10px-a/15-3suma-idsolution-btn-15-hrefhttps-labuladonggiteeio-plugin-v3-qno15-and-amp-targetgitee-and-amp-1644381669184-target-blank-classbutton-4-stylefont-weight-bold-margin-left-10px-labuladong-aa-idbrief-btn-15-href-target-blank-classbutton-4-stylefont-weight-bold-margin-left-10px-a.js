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
        //for the next iteration, skip the same value 
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
//     var twoSum = function(target, start, nums, result) {
//         var left = start, right = nums.length-1;
//         while(left < right) {
//             var sum = nums[left] + nums[right];
//             if(sum === target) {
//                 result.push([nums[start-1], nums[left], nums[right]]);
//                 left++;
//                 right--;
//                 //只需要make sure 其中的一个不需要重复即可
//                 while (nums[left] == nums[left-1]) left++;
//                 //while (left < right && nums[right] == nums[right+1]) right--;
//             } else if(sum > target) {//[1,2,3,3,3,3]
//                 right--;
//             } else {
//                 left++;
//             }
            
//         }
//     }

var twoSum = function(complement, start, nums, result) {
    var numSet = new Set();
    //iterate through the array, if the complement-current number is in the map, 
        //yes->add to result, remove from set
        //no add current number to map
    //[-2,0,1,1,2]
    //-2 comp = 2
    //set=[0]
    for(var i = start; i < nums.length; i++) {
        var comp = complement - nums[i];
        
        if(numSet.has(comp)) {
            result.push([nums[start-1], comp, nums[i]]);
            // numSet.delete(comp);
            while(nums[i+1] === nums[i] && i+1 < nums.length){
                i++;
            }
        }else{
            numSet.add(nums[i]);
        }
    }
}
