/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    //sort
    //currIdx = 0;
    //use recursion to build a list 
    //start from 0, iterate through the array
    //skip current if current = prev
    //if(currIdx < i) means a new iteration loop
    //currIdx = i; i++
    //check if current num is alreay in visited{};
        // continue
    //add to list
    //use recursion to build a list 
    //pop out current number
    nums.sort();
    var result = [];
    var prev = null;
    var visited = {};
    

    var findCombos = function(list) {
        if(list.length === nums.length) {
            result.push(list.slice());
            return;
        }
        for(var i = 0; i < nums.length; i++) {
            //只有重复的第一个元素recursion
            //如果是重复的第二个，第一个在结尾会被标记成visited[i]=false;
            //如果是重复的第三个及以后，前面一个是没被visited过的
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) {
                continue;
            }
            if(visited[i]) {
                continue;
            } else {
                list.push(nums[i]);
                visited[i] = true;
                findCombos(list);
                list.pop();
                visited[i] = false;
            } 
        }
    }
    findCombos([]);
    
    return result;
};