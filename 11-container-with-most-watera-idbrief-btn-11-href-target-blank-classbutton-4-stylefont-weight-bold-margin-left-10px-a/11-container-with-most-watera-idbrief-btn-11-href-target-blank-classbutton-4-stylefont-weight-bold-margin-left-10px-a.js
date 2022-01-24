/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    //area = idx diff * minHeight of the two side bars
    //USE two pointers to calc area, one left, one right
    //maxArea
    //currArea
    
    //always move the pointer pionting at the lower bar
    
    
    var maxArea = 0;
    var n = height.length;
    var left = 0, right = n-1;
    
    while(left < right) {
        var currArea = Math.min(height[left], height[right]) * (right-left);
        maxArea = Math.max(currArea, maxArea);
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     var maxArea = 0;
//     var currArea = 0;
//     var leftPointer = 0;
//     var rightPointer = height.length;
    
//     while(leftPointer < rightPointer) {
//         if (height[leftPointer] < height[rightPointer]) {
//             currArea = (rightPointer - leftPointer) * height[leftPointer];
//             leftPointer++;
//         } else {
//             currArea = (rightPointer - leftPointer) * height[rightPointer];
//             rightPointer--;
//         }
//         if (currArea > maxArea) {
//             maxArea = currArea;
//         }
//     }
    
//     return maxArea;
};