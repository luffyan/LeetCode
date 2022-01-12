/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    var total = 0;
    //iterate through array, for each number in the array
        //find PLE(prev less element) idx and NLE(next less element) idx
        //[3,1,2,4]
        //leftIdx=[-1,-1,1,2], rightIdx = [1,4,4,4]
        //idx = [0,1,2,3]
        //left=[1,2,1,1], right=[1,3,2,1]
        //left*right =[1,6,2,1]
        //total = number*left*right = [3,6,4,4] add up to = 17
    var leftIdx = [];
    var rightIdx = [];
    var stack1 = [];
    var stack2 = [];
    //find PLE, record number of elements to the left of current element that is strictly bigger 
    for(var i = 0; i < arr.length; i++) {//[1,5,6,2,4,6,3] => [1,2,4,6]
        //stack is increasing order, stack stores idx of number in arr
        while(stack1.length !== 0 && arr[i] <= arr[stack1[stack1.length-1]]){
            stack1.pop();
        }
        //current element, PLE idx is stored in leftIdx array, 
        leftIdx[i] = stack1.length === 0 ? -1 : stack1[stack1.length - 1];
        stack1.push(i);
    }
    
    //find NLE, record number of elements to the right of current element that is strictly bigger
    for(var i = arr.length-1; i >= 0; i--) {//[3,1,2,4] =>[1]
        while(stack2.length !== 0 && arr[i] < arr[stack2[stack2.length - 1]]) {
            stack2.pop();
        }
        rightIdx[i] = stack2.length === 0 ? arr.length : stack2[stack2.length - 1];
        stack2.push(i);
    }
    
    for(var i = 0; i < arr.length; i++) {
        total += arr[i] * (i - leftIdx[i]) * (rightIdx[i] - i);
    }
    return total % (10**9 + 7);
};