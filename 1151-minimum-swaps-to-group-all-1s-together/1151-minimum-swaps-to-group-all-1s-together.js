/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    //count how many 1s in the array to get totalOnes
    var totalOnes = 0;
    for(var num of data) {
        if(num === 1) {
            totalOnes++;
        }
    }
    //6
    
    //sliding window, window size = totalOnes
    
    //scan through data array, record current seen ones in the window, 
    //update most seen ones in the window in the process
    var left = 0;

    var mostOnes = 0;
    var currOnes = 0;
    //[1,0,1,0,1,0,0]
    for(var i = 0; i < data.length; i++) {
        if(data[i] === 1) {
            currOnes++;
        }
        if(i - left + 1 === totalOnes) {
            mostOnes = Math.max(mostOnes, currOnes);
            
            if(data[left] === 1) {
                currOnes--;
            }
            left++;
        }
    }
    //#swaps = totalOnes - mostOnes
    return totalOnes - mostOnes;
};