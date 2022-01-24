/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    //comparator to compare
    //for each word in the words array,
        //find char idx order.indexOf('w')
    //put char from order into hashmap,
    //map['w'] = 0;
    
    //app, apple
    var map = {}
    for(var i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }
    for(var i = 1; i < words.length; i++) {
        for(var j = 0; j < words[i].length; j++) {
            
            if(comparator(words[i-1][j], words[i][j], map) < 0) {
                return false;
            } else if(comparator(words[i-1][j], words[i][j], map) > 0) {
                break;
            } else if(j === words[i].length-1 && words[i].length < words[i-1].length) {
                return false;
            }
        }
    }
    return true;
    
};
// apple, app // i = 1; j = 0,1,2 < 3
var comparator = function(a, b, map) {
    if(map[a] > map[b]) {
        return -1;
    } else if(map[a] === map[b]) {
        return 0;
    } else {
        return 1;
    }
}


































