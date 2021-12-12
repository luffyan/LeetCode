/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    //不能用for loop， 因为indices array里面的顺序可能是unordered， 那么遍历的时候就不能按照顺序加到一个result string里面
    // split the given string s into an array of chars, split = ['a', 'b', 'c', 'd']
    var split = s.split('');
    // iterate through indices and sources array, 
    for (var i = 0; i < indices.length; i++) {
    // if sources[i] === s.substring(indices[i], indices[i]+len), replace
        var len = sources[i].length; 
        if(sources[i] === s.substring(indices[i], indices[i] + len)) {
            // change value in the split array, split[indices[i]] = targets[i];
            split[indices[i]] = targets[i];
            // if replace multiple characters(sources[i].length > 1)
            // set (sources[i].length - 1) number of char to be ''
            if(sources[i].length > 1) {
                var numEmpty = sources[i].length - 1;//1
                while(numEmpty !== 0) {
                    split[indices[i]+numEmpty] = '';
                    numEmpty--;
                }
            }
        } 
    // else if not equal, no replacement
    }
    // split.join('')
    return split.join('');
};