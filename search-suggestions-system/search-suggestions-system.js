/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();//???为啥不能a-b
    
    var start = 0;
    var bsStart = 0;
    var n = products.length;
    var result = [];
    var prefix = '';
    for(var c of searchWord) {
        prefix += c;
        start = findLowerBound(products, bsStart, prefix);
        //console.log(start);
        
        result.push([]);
        if(start === -1) {
            continue;
        }
        for(var i = start; i < Math.min(start+3, n); i++) {
            if(products[i].length < prefix.length || products[i].substring(0, prefix.length) !== prefix) {
                break;
            }
            result[result.length-1].push(products[i]);
        }
        bsStart = start;
    }
    return result;
};

var findLowerBound = function(products, start, word) {
    var left = 0;
    var right = products.length - 1;
    while(left+1 < right) {
        var mid = Math.floor((left+right)/2);
        if(word <= products[mid]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    if(word <= products[left]) {
        return left;
    }
    if(word <= products[right]) {
        return right;
    }
    return -1;
}


// 1.2.3  =>1.5
// left = 0 right = 2;
// while(1<2) {
//     mid = 1;
//     1.5<2 right = 1
// }
// while(1<1)
// if(1.5 < 2)
// return 1




