/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    var x = 0, y = 0;
    var idx = 0;
    var dir = [[0,1], [1,0], [0,-1], [-1,0]];
    
    for (var i = 0; i < instructions.length; i++) {
        var currLetter = instructions[i];
        if(currLetter === 'G') {
            x += dir[idx][0];
            y += dir[idx][1];
        } else if (currLetter === 'L') {
            idx = (idx+3) % 4;
        } else {
            idx = (idx + 1) % 4;
        }
    }
    
    return (x === 0 && y === 0) || (idx != 0);
};