/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var len = s.length;
    var memo = [];
    var wordBreak = function(start) {
        if(start === len) {
            return true;
        }
        if(memo[start] !== undefined) {
            return memo[start];
        }
        for(var end = start+1; end <= len; end++) {//end在substring里取不到
            //for every combo of prefix of s, check if exists in the wordDict
            var substr = s.substring(start, end);
            if(wordDict.includes(substr) && wordBreak(end)){
                memo[start] = true;
                return true;
            }
        }
        memo[start] = false;
        return false;
    }
    return wordBreak(0);          
};

