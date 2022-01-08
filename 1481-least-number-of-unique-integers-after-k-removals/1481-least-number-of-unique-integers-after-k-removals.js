/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    // {
    // 4:1,
    // 3:3,
    // 2:1,
    // 1:2
    // }
    // k=4
    // build a map,
    // sort key based on value,
    
    var map = {};
    for(var num of arr) {
        if(num in map) {
            map[num]++;
        }else {
            map[num] = 1;
        }
    }
    var list = [];
    for(key in map){
        var temp = {};
        temp['key'] = key;
        temp['val'] = map[key];
        list.push(temp);
    }
    list.sort((a, b) => (a.val - b.val));
    var result = list.slice();
    for(var i = 0; i < list.length; i++) {
        //delete current obj
        if(k === 0) {
            return list.length;
        }else if(k >= list[i].val) {
            k = k - list[i].val;
            list.splice(i, 1);
            i = i - 1;
        } else {
            return list.length;
        }
    }
    return list.length;
};