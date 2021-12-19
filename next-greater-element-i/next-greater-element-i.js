/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var stack = [];
    var result = [];
    var map = {};
    // build a map for nums2, to store the result for every posssible number in nums2 in the form of (element, next_greater_element)
    if(nums2.length === 0) {
        return [-1];
    }
    stack.push(nums2[0]);
    for(var i = 0; i < nums2.length; i++) {
        if(nums2[i] < stack[stack.length-1]) {
            stack.push(nums2[i]);
        } else {//create a map
            while(stack.length > 0 && nums2[i] > stack[stack.length-1]) {
                map[stack[stack.length-1]] = nums2[i];
                stack.pop();
            }
            stack.push(nums2[i]);
        }
    }
    while(stack.length > 0) {
        map[stack[stack.length-1]] = -1;
        stack.pop();
    }
    for(var num of nums1) {
        result.push(map[num]);
    }    
    
    return result;
};