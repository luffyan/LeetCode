/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var start = 0;
    var tank = 0;
    var total = 0;
    var n = gas.length;
    var cosume = 0;
    
    for (var i = 0; i < n; i++) {
        
        consume = gas[i] - cost[i];
        tank += consume;
        total += consume;
        if (tank < 0) {
            start = i+1;
            tank = 0;
        }
    }
    return total < 0 ? -1 : start;
};