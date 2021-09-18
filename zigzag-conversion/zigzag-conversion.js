/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var currRow = 0;
    var result = [];
    var headingDown = true;
    
    if (numRows === 1) {
        return s;
    }
    
    for (var i = 0; i < numRows; i++) {
        result.push([]);
    }
    //console.log(result)
    
    for (var i = 0; i < s.length; i++) {
        if (headingDown) {
            (result[currRow]).push(s[i]);
            currRow++;
            //console.log(result[currRow])
        }
      
        if (!headingDown) {
            currRow--;
            result[currRow].push(s[i]);
        }
        
        if (currRow === numRows) {
            headingDown = !headingDown;
            currRow--;
        }
        if (currRow === 0) {
            headingDown = !headingDown;
            currRow++;
        }
        
      
    }
    
    return result.flat().join('');
    
};