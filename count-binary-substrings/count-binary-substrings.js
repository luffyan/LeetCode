/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    //相同数目的0和1， 110000答案是1100，and 10,说明两者共同的由少的那个数目的短板决定
    //
    var ans = 0;
    if (s.length === 1) {return 0;}
    //记录一样的数字相邻的为一个group,例如【1，1，1，0，0，1，1，1，1，1，0，0，0】 group [3,2,5,3]
    var group = [];
    var count = 1;
    for(var i = 1; i < s.length; i++) {
        //current 等于前面一个，count++
        if(s[i] === s[i-1]){//011
            count++;
        } else {//current不等于前面一个，把之前的count加到group里面，重新set count等于1
            group.push(count);
            count = 1;
        }
    }
    group.push(count);
    //console.log(group);
    for(var i = 0; i < group.length-1; i++) {
        ans += Math.min(group[i], group[i+1]);
    }
    return ans;
        
};