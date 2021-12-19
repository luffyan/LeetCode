/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
     if(arr.length === 0 || (arr.length === 1 && arr[0]%2 === 0)){
            return 0;
        }
        if(arr.length === 1 && arr[0]%2 !== 0){
            return 1;
        }
        var count = 0, odd = 0, even = 0;
        var preSum = [];
        preSum[0] = arr[0];
        if(arr[0]%2 !== 0){
            ++count;
            ++odd;
        }
        else{
            ++even;
        }
        for(var i=1; i<arr.length; i++){
            preSum[i] = preSum[i-1] + arr[i];
            if(preSum[i]%2 != 0){
                ++count;
                count += even;
                ++odd;
            }
            else{
                count += odd;
                ++even;
            }
        }
        return count%(1000000007);
    

//     var count = 0;
//     for(var i = 0; i < arr.length; i++) {
//         currSum = 0;
//         for(var j = i; j < arr.length; j++) {
//             currSum += arr[j];
//             if(currSum % 2 !== 0) {
//                 count++;
//                 count = count % (10**9 + 7)
//             }
            
//         }
//     }
//     return count;
};