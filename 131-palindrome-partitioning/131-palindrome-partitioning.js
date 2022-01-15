/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // if'a' && 'a' &&'b'
    // add to result;
    // if'a' && 'a'
    // add to result
    // if'a' && 'a' && 'b'
    // add to result
    // 'aa' 
    
    var result = [];
    
    var findPalindrome = function(list, start) {
        
        if(start === s.length) {
            result.push(list.slice());
        }
        
        for(var end = start; end < s.length; end++) {
            if(isPalindrome(start, end)) {
                list.push(s.substring(start, end+1));
                findPalindrome(list, end+1);
                list.pop();
            }
            
        }
    }
    var isPalindrome = function(start, end) {
        while(start < end) {
            if(s[start] !== s[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    findPalindrome([], 0)
    return result;
};