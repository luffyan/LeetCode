/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    //write comparator to compare
    //put char from order into hashmap,
    //map['w'] = 0;
    
    //app, apple
    //compare adjacent words, every two words
    var map = {}
    for(var i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    for(var i = 1; i < words.length; i++) {
        var word1 = words[i-1];
        var word2 = words[i];
        for(var j = 0; j < word1.length; j++) {
            
            if(comparator(word1[j], word2[j], map) < 0) {//"lello""heetcode"
                return false;
            } else if(comparator(word1[j], word2[j], map) > 0) {
                break;
            } else if(j === word2.length-1 && word1.length > word2.length) {
                return false;
            }
        }
    }
    return true;
    
};
// apple, app // i = 1; j = 0,1,2 < 3
// small positive, large negative
var comparator = function(a, b, map) {
    if(a === undefined) {
        return 1;
    }
    if(b === undefined) {
        return -1;
    }
    if(map[a] < map[b]) {
        return 1;
    } else if(map[a] === map[b]) {
        return 0;
    } else {
        return -1;
    }
}


































