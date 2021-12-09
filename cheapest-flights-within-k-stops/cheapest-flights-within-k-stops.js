/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // 在输入params中maintain sum, 就不需要return sum，without temp sum, return sum
    memo = {};
    var findCheapest = (start, stops) => {
        // key: start, stops, val: cost
        if(memo.hasOwnProperty([start, stops])) {
            //console.log("memo get: start:", start, " stops:", stops);
            return memo[[start, stops]];
        }
        if(stops > k) {
            memo[[start, stops]] = -1;
            //console.log("memo set: start:", start, " stops:", stops);
            return -1;
        }
        if(start === dst) {
            return 0;
        }
        var min = Number.MAX_VALUE;
        //判断找到了，才返回最小值
        var find = false;
        for(var flight of flights) {
            if(flight[0] === start) {
                var cost = findCheapest(flight[1], stops+1);
                 //console.log("f0:", flight[0], " f1:", flight[1], " f2:", flight[2], " stops:", stops, " cost: ", cost, " start:", start);
                if(cost !== -1){
                    min = Math.min(min, cost+flight[2]);
                    find = true;
                }
            }
        }
        if(find) {
            //console.log("memo set: start:", start, " stops:", stops, " min:", min);
            memo[[start, stops]] = min;
            return min;
        } else {
            //console.log("memo set: start:", start, " stops:", stops, " min:", -1);
            memo[[start, stops]] = -1;
            return -1;
        }
    }
    return findCheapest(src, -1);
};
//[1, 0, 40] 1, 4

//iterate through the array, find start, 

// find the city you can get from start (end1)
// find the next city you can get from end1; stops++
// base case if stops > k; return false;
// else if dst === start update cheapest, return cheapest;
// find all combos of cost starting from start to end
// 
// var findCheapestHelper = (currStart, stops) => {
//         if(stops > k) {
//             return -1;
//         }
//         if(dst === currStart) {          
//             return 0;
//         }
//         var min = Number.MAX_VALUE;
//         var find = false;
//         for(var flight of flights) {            
//             if(flight[0] === currStart) {
//                 var cost = findCheapestHelper(flight[1], stops+1);
//                 if (cost !== -1) {
//                     min = Math.min(min, cost + flight[2]);
//                     find = true;
//                 }     
//             }
//         }
//         if (find) {          
//             return min;
//         }
//         return -1;
//     }
//     return findCheapestHelper(src, -1);
 