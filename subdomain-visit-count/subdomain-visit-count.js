/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var obj = {};
    var result = [];
    
    // obj[com] = count
    // obj[leetcode.com] = count
    
    for (var i = 0; i < cpdomains.length; i++) {
        var splitted = cpdomains[i].split(' '); // ["9001","discuss.leetcode.com"]
        var count = splitted[0]; // "9001"
        var domain = splitted[1]; // "discuss.leetcode.com"
        
        var domainSplit = domain.split('.'); // ["discuss", "leetcode", "com"];
        var len = domainSplit.length;
        var subdomains = [];
        var subdomain = "";
        // console.log(domainSplit);
        for (var j = len - 1; j >= 0; j--) {
            subdomain = domainSplit[j] + (j < len-1 ? '.' : '') + subdomain;
            
            if (subdomain in obj) {
                obj[subdomain] += Number(count);
            } else {
                obj[subdomain] = Number(count);
            }
        }
    }
    
    for (var key in obj) {
        result.push(obj[key] + ' ' + key);
    }
    
    return result;
};