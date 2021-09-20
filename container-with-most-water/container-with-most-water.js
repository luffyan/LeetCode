/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxArea = 0;
    var currArea = 0;
    var leftPointer = 0;
    var rightPointer = height.length;
    
    while(leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            currArea = (rightPointer - leftPointer) * height[leftPointer];
            leftPointer++;
        } else {
            currArea = (rightPointer - leftPointer) * height[rightPointer];
            rightPointer--;
        }
        if (currArea > maxArea) {
            maxArea = currArea;
        }
    }
    
    return maxArea
};