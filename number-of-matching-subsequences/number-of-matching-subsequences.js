/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    // iterate through words, for each word, check if subsequece
    var count = 0;
    for(var word of words) {
        if(subseq(s, word)) {
            count++;
        }
    }
    return count;
};
    // check if subsequence
    // use two pointers to iterate through word, and s at the same time

var subseq = (s, word) => {
    var left1 = 0, left2 = 0;
    var right1 = s.length;
    var right2 = word.length;
    
    while(left1 < right1 && left2 < right2) {
        if(s[left1] === word[left2]) {
            left1++;
            left2++;
        } else {
            left1++;
        }
    }
    return left2 === word.length;
}

//     var ans = 0;
//     var heads = [];
//     //create an array of arrays to store words
//     for(var i = 0; i < 26; i++) {
//         heads[i] = [];
//     }
    
//     // push the words with the same starting char into the same array at idx
//     // [['a','adfs','adfds'],['bb','bwe'],['c','cewf']......26];
//     for(var word of words) {
//         var arrIdx = word.charAt(0)-'a';
//         heads[arrIdx].push(word);
//     }
        
//     for(var c of s) {
//         var old_bucket = heads[c - 'a'];
//         heads[c - 'a'] = ;
        
//         for(var char of old)
//     }