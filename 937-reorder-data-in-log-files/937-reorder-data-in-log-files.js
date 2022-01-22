/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    //add digit logs to a queue
    // sort letter logs
        //sort by contents, sort by id
    //append queue to the end of the sorted letter logs to maintain relative order of digit logs
    const letterLogs = [];
    const digitLogs = [];
    
    for(var log of logs) {//'a1 9 2 3 1'
        var split = log.split(' ');//['a1','9','2', '3', 1]
        var allDigits = true;
        for(var i = 1; i < split.length; i++) {
            if(!isDigit(split[i])) {
                letterLogs.push(log);
                allDigits = false;
                break;
            }
        }
        if(allDigits) {
            digitLogs.push(log);
        }
    }
    console.log(letterLogs);
    console.log(digitLogs);
    letterLogs.sort((a, b) => {
        const aContent = a.slice(a.indexOf(' ') + 1);
        const bContent = b.slice(b.indexOf(' ') + 1);
        const c = aContent.localeCompare(bContent);
        if (c) return c;
        return a.localeCompare(b);// if c = 0, means a = b
    });
    return [...letterLogs, ...digitLogs];
};
var isDigit = function(str) {
    for(var char of str) {
        if(char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}