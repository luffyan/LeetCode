/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    var stack = [];

    
    for(var asteroid of asteroids) {
        if (asteroid > 0) {
            stack.push(asteroid);
        } else {
           
            while(stack.length > 0 && stack[stack.length-1] > 0 && stack[stack.length - 1] < -asteroid) { 
                // one negative ast collide with many pos asteroids in the stack one by one
                stack.pop();
            } 
            if (stack.length && stack[stack.length - 1] === -asteroid) {
                stack.pop();
            } 
            else if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid);
            }
        }
    }
    return stack;
};



// -15 
// 5  -115