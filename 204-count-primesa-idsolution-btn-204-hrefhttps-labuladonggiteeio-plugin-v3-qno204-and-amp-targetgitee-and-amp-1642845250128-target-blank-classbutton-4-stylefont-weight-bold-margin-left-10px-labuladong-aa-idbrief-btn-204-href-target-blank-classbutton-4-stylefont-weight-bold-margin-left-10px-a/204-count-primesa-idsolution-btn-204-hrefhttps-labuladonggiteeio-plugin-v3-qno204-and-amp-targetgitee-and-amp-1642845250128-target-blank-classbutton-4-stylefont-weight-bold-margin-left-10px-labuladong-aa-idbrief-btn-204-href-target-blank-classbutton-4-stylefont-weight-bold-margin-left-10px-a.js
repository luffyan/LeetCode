/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    
    //1 is not a prime
    //[true,true, true, true,true]
    //[0,1,2,3,4]
    //create an array of size n, idx: 0,1,2,3...n-1, idx[0]=1, idx[1]= 2, ...idx[n-1] = n;
    //find all non prime numbers from 2 to n;
    //iterate from i = 2...sqrt of n;
    //i = 2; 4,6,8,10, until number is > n, mark those positions false;
    //i = 3; 
    if(n <= 2) return 0;
    var array = new Array(n).fill(true);
    
    for(var i = 2; i <= Math.sqrt(n); i++) {
        for(var j = i*i; j < n; j+=i) {
            array[j] = false;
        }
    }
    var count = 0;
    for(var i = 2; i < array.length; i++) {
        if(array[i]) {
            count++;
        }
    }
    
    return count;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     if (n <= 2) return 0;
    
//     var numbers = [];
//     for(var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//         if(!numbers[i]) {
//             for(var j = i*i; j < n; j += i) {
//                 numbers[j] = true;
//                 console.log(j, numbers[j]);
//             }
//         }
//     }
//     var numberOfPrimes = 0;
//     for(var i = 2; i < n; i++) {
//         if(!numbers[i]) {
//             numberOfPrimes++;
//         }
//     }
//     return numberOfPrimes;
};