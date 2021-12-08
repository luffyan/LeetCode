/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//----------------DP solution-----------------------------
//        i 0 1 2 3
//     j      a b c
    // 0      0 0 0
    // 1 d  0 0 0 0
    // 2 c  0 0 0 1
    // 3 b  0 0 1 1

// logic: 2d array dp[i][j] repesents the length of the common sequence for text1(length is i) and text2(length is j)，if one of the strings length is 0, common subseq length is also 0, so dp[0][x] and dp[x][0] is 0(first row and col are 0), 
// if current chars from two strings are the same, dp[i][j] = dp[i-1][j-1]+1, 等于both string without current chars subseq length, e.g 'fabc', 'hadc', c is in both strings, so common subseq for the two strings 'fabs' and 'hadc' equals common subseq for 'fab' and 'had' + 1
// if current chars are not equal, dp[i][j] = 他左边和上边中比较大的值，e.g. 'fab' and 'hbd', b !== d,  common subseq = 'fab' and 'hb' (1) and 'fa' and 'hbd'(0)中比较长的common subseq = 1
    
    
var longestCommonSubsequence = function(text1, text2) {
    if(text1.length === 0 || text2.length === 0) {
        return 0;
    }
    var dp = [];
    for(var i = 0; i <= text1.length; i++) {
        for(var j = 0; j <= text2.length; j++) {
            if(!dp[i]) {
                dp[i] = [];
            } 
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if(text1.charAt(i-1) === text2.charAt(j-1)) {
                      dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[text1.length][text2.length];
};


// var longestCommonSubsequence = function(text1, text2) {
//     var result = [];
//     var findLongest = (text1, text2, common) => {
//         if(text1.length === 0 || text2.length === 0) {
//             result.push(common.slice());
//             return;
//         }
//         if(text1[0] === text2[0]) {
//             common += text1[0];
//         } else {
//             var common1 = common;
//             findLongest(text1.slice(1), text2, common1);
//             var common2 = common;
//             findLongest(text2.slice(1), text2, common2);
//         }
//     }
//     findLongest(text1, text2, '');
//     console.log(result);
//     var longest = '';
//     var maxLen = 0;
//     for(var string of result) {
//         var len = string.length;
//         if(len > maxLen) {
//             longest = string;
//             maxLen = len;
//         }
//     }
//     return longest;
// };
// var findLongest = (text1, text2, idx1, idx2) => {
//         if(idx1 >= text1.length || idx2 >= text2.length) {
//             return 0;
//         }
//         if(text1.length === 0) {
//             return 0;
//         }
//         if(text2.length === 0) {
//             return 0;
//         }
//         if(text1[idx1] === text2[idx2]) {
//             return findLongest(text1, text2, idx1+1, idx2+1) + 1;
//         } else
//         return Math.max(findLongest(text1, text2, idx1+1, idx2), findLongest(text1, text2, idx1, idx2+1));
//     }
//     findLongest(text1, text2, 0, 0);
//     return findLongest;

