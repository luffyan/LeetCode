/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    //logic: 变量first， sec, 
    //iterate through the array, if < first, update first, else < sec, update sec, if > sec return true
    var first = Number.MAX_VALUE, sec = Number.MAX_VALUE;
    for(var num of nums) {
        if(num <= first) {
            first = num;
        } else if (num < sec) {
            sec = num;
        } else if (num > sec) {
            return true;
        }
    }
    return false;
};