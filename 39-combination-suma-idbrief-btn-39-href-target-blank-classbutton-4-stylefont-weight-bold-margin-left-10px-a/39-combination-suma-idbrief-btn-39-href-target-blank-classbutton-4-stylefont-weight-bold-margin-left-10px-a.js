/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = [];
    var findCombos = function(sum, list, start) {
        if(sum === target) {
            result.push(list.slice());
            return;
        }
        if(sum > target) {
            return;
        }
        for(var i = start; i < candidates.length; i++) {
            list.push(candidates[i]);
            findCombos(sum+candidates[i],list, i);
            list.pop();
        }
    }
    findCombos(0, [], 0);
    return result;
};
/*
[2,3,6,7], target = 7, len = 4
findCombos(0, [], 0)
    i = 0; start = 0
        list=[2],
        findCombos(2, [2], 0);
            i = 0; start = 0;
                list[2,2]
                findCombos(4,[2,2],0)
                    i = 0; start = 0
                        list[2,2,2]
                        findCombos(6,[2,2,2],0)
                            i = 0;
                                list[2,2,2,2]
                                findCombos(8,[2,2,2,2],0)
                                list[2,2,2]
                            i = 1;
                                list[2,2,2,3]
                                findCombos(9,[2,2,2,3],1);
                                list[2,2,2]
                            i = 2;
                                list[2,2,2]
                            i = 3;
                                list[2,2,2,7]
                                findCombos(9,[2,2,2,3],3);
                                list[2,2,2]
                    i = 1;
                        list[2,2,3]
                        findCombos(7, [2,2,3],1)
                        result[[223]]
                        list[2,2]
                    i = 2;
                        list[2,2]
                    i = 3;
                        list[2,2]
            i = 1;
                list[2,3]
            i = 2;
            i = 3;
    i = 1;
    i = 2;
    i = 3;
*/