/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    // naive solution
    // var arr = new Array(length).fill(0);
    // for(var update of updates) {
    //     //from start to end
    //     var startIdx = update[0];
    //     var endIdx = update[1];
    //     var change = update[2];
    //     for(var i = startIdx; i <= endIdx; i++) {
    //          arr[i] += change;
    //     }
    // }
    // return arr;
    
    // optimize
    // 发现只有一个read query in the end,所以只需要最后update entire array,
    // 每次start idx处加了一个数字后， array后面的数字都默认是要加的
    // 但是我们只更新start idx处的那个数字，
    // 后面的用array[i] = array[i-1] + array[i];
    // 如果array[i]是end后面的一个数字，也就是update不包括这里，那就给他一个negative value,比如end后面一个数字初始值是0，change是5，前面的数字都加5，把他初始值改成-5，到他这里就变成0了，change 5 也不会影响它后面的数字
    // 保证它和它后面的都不会被当前的update所影响
    // 如果end+1超过范围了，那就不用管他，因为不怕他被影响了
    
    var output = new Array(length).fill(0);//[0,0,0,0,0]
    
    for(var update of updates) {
        var start = update[0];
        var end = update[1];
        var change = update[2];
        output[start] += change;
        if(end+1 <= length - 1) {
            output[end+1] -= change;
        }
    }
    for(var i = 1; i < output.length; i++) {
        output[i] = output[i] + output[i-1];
    }
    return output;
};