/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let str of strs) {
        const sorted = [...str].sort()
        
        if(!map[sorted]) {
            map[sorted] = [];
        };
        map[sorted].push(str);
    }
    return Object.values(map);
};