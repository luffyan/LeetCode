/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    var map = {};
    var findChain = (str) => {
        if(map.hasOwnProperty(str)) {
            return map[str];
        }
        if(words.indexOf(str) === -1) {
            //longest = Math.max(longest, depth);
            return 0;
        }
        var max = 0;
        for(var i = 0; i < str.length; i++) {
            var removed = str.slice(0, i) + str.slice(i+1, str.length);
            max = Math.max(max, findChain(removed) + 1); 
        }
        map[str] = max;
        return max;
    }
    
    // find the longest string in the array, abcd

    var longest=0;
    for(var word of words) {
        longest = Math.max(longest, findChain(word, 0));
    }
    return longest;
};