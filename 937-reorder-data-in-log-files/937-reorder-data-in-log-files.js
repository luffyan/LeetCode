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
    logs.forEach(log => {
        if (/ \d/.test(log)) {//regex, contains digit between two slashes //注意有个空格
          digitLogs.push(log);
        } else {
          letterLogs.push(log);
        }
    });
    letterLogs.sort((a, b) => {
        const aContent = a.slice(a.indexOf(' ') + 1);
        const bContent = b.slice(b.indexOf(' ') + 1);
        const c = aContent.localeCompare(bContent);
        if (c) return c;
        return a.localeCompare(b);// if c = 0, means a = b
    });
    return [...letterLogs, ...digitLogs];
};