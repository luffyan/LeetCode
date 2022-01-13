/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //LTE
    //iterate from left to right
    //for each bar, find the top of water level, which is its min(leftMax, rightMax)
    //ans += topLevel - current bar height
    // var output = 0;
    // for(var i = 0; i < height.length; i++) {
    //     var leftMax = 0;
    //     var rightMax = 0;
    //     for(var j = 0; j < i; j++) {
    //         leftMax = Math.max(leftMax, height[j]);
    //     }
    //     for(var k = i+1; k < height.length; k++) {
    //         rightMax = Math.max(rightMax, height[k]);
    //     }
    //     var waterLevel = Math.min(leftMax, rightMax);
    //     if(waterLevel - height[i] > 0) {
    //         output += waterLevel - height[i];
    //     }
    // }
    // return output;
    //---------------------------------------------------------
    //find leftMax and rightMax first use DP
    //[0,1,0,2,1,0,1,3,2,1,2,1]
    //[0,0,1,1,2,2,2,2,3,3,3,3]
    var total = 0;
    var leftMax = [];
    leftMax[0] = 0;
    for(var i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i-1]);
    }
    
    var rightMax = [];
    //[0,1,0,2,1,0,1]
    //[2,2,2,1,1,1,0]
    rightMax[height.length-1] = 0;
    for(var i = height.length -2 ; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i+1]);
    }
    
    for(var i = 0; i < height.length; i++) {
        var waterLevel = Math.min(leftMax[i], rightMax[i]) - height[i];
        if(waterLevel > 0) {
            total += waterLevel;
        }
        
    }
    return total;
};