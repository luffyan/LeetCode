/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1,2,3]  
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//N* 2^N, N, build N number of substes, each subset has2^n combos
var subsets = function(nums) {
    var result = [];
    if(nums === null || nums.length === 0 ){
        return result;
    }
    var findSubsets = (list, start) => {
        
        for(var i = start ; i < nums.length; i++) {// i = start not 0!!! use start to control you keep choosing the next element to add to your list
            list.push(nums[i]);
            findSubsets(list, i+1);
            list.pop();
        }
        result.push(list.slice());//别忘了slice
    }
    
    findSubsets([], 0);
    return result;
};

    

// findSubsets: [], start = 0
//     result : [[]]
//     i = 0: list = [1]: 
//     findsubset: [1], start = 1:
//         result: [[], [1]]
//         i = 1: list=[1,2]:
//         findsubset: [1,2], start= 2:
//             result: [[], [1], [1,2]]
//             i = 2: list=[1,2,3]
//             findsubset([1,2,3], start = 3)
//                 result:[[], [1], [1,2], [1,2,3]]
//             list=[1,2]
//         list=[1],
//         i = 2: list=[1,3]
//         findsubset([1,3], start=3)
//             result=[[[], [1], [1,2], [1,2,3]],[1,3]],
//         list=[1]
//     list=[]
//     i = 1;list=[2]
//     findsubset([2], start = 2)
//         result = [[], [1], [1,2], [1,2,3],[1,3],[2]]
//         i = 2: list=[2,3]
//         findsubset([2,3], start = 3)
//             result = [[], [1], [1,2], [1,2,3],[1,3],[2],[2,3]]
//         list[2]
//     list[]

//     i = 2; list=[3]
//     findsubset([3], start = 3)
//         result =  [[], [1], [1,2], [1,2,3],[1,3],[2],[2,3],[3]]
//     list[]




