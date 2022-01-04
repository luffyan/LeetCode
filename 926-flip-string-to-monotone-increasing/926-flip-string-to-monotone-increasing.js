/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    var count = 0;
    var countOne = 0;
    var min = Number.MAX_VALUE;
    //iterate through string, for each current char
    //flip all 1s before current to 0s
    //flip all 0s after current to 1s
    
    //create an array to store all the 1s before current index
    var arrayOne = [];
    //'00110' [0,0,1,2,2] idx = 2 length = 5
    for(var i = 0; i < s.length; i++) {
        if(s[i] === '1') {
            countOne++;
        }
        arrayOne.push(countOne);
    }
    var leftFlips = 0;
    var rightFlips = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] === '1') {
            leftFlips = arrayOne[i] - 1;
        } else {
            leftFlips = arrayOne[i];
        }
        //right flips = total number to the right of current - total number of 1s to the right of current
        rightFlips = s.length - i - 1 - (arrayOne[arrayOne.length - 1] - arrayOne[i]);
        count = leftFlips + rightFlips;
        if(count < min) {
            min = count;
        }
    }
    return min;
};