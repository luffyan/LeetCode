/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    //看错题了，subsequence理解错误
    // var longest = 0;
    // //iterate through the array
    // // left, right
    // // update left = right+1
    // var left = 0, right = 0;
    // while(right < nums.length) {
    //     while(right < nums.length - 1 && nums[right] < nums[right+1]) {
    //         right++;
    //     }
    //     var currLen = right - left + 1;
    //     // for next subsequence
    //     left = right + 1;
    //     right = left;
    //     longest = Math.max(currLen, longest);
    // }
    // return longest;
    
    //iterater through the array
    //for each item, record the current length of the increasing subseq
    //update longest
    
    var dp = new Array(nums.length).fill(1);
    
    for(var i = 0; i < nums.length; i++) {
        for(var j = 0; j < i; j++) {
            if(nums[i] > nums[j])
            dp[i] = Math.max(dp[j]+1, dp[i]);
        }
    }
   
    var longest = 0;
    for (var count of dp) {
        longest = Math.max(longest, count);
    }
    return longest;
};