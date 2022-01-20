/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    //从4个数字中每次选择两个数字，4x3=12种方法，
    //变成3个数字中选择2个数字，3x2=6种方法，。。。明显的递归思路
    //每次选择的两个数字可以进行四种运算
    //除法运算的时候要看dividend / divisor, divisor can not be 0;
    //因为是real division, 如果小于epsilon = 1e-6;就认为两个数字相等
    //当isValid = true,代表成功了，不用继续探索了
    //choose from +-*/,(), four cards
    const epsilon = 1e-6;
    var len = cards.length;
    if(len === 1) {
        return Math.abs(cards[0] - 24) < epsilon;
    }
    var isValid = false; //用于控制是否进入递归
    
    //两层循环，枚举出所有组合
    for(var i = 0; i < len; i++) {
        for(var j = i+1; j < len; j++) {
            //选出两个数，计算出新的数字
            var n1 = cards[i];
            var n2 = cards[j];
            var newNums = [];
            for(var k = 0; k < len; k++) {
                if(k != i && k!= j) { // 剔除掉选出的两个数
                    newNums.push(cards[k]);
                }
            }
            // 加
            isValid = isValid || judgePoint24([...newNums, n1 + n2]);
            // 减与被减
            isValid = isValid || judgePoint24([...newNums, n1 - n2]);
            isValid = isValid || judgePoint24([...newNums, n2 - n1]);
            // 乘
            isValid = isValid || judgePoint24([...newNums, n1 * n2]);
            if (n2 !== 0) { // 除
                isValid = isValid || judgePoint24([...newNums, n1 / n2]);
            }
            if (n1 !== 0) { // 被除
                isValid = isValid || judgePoint24([...newNums, n2 / n1]);
            }
            if(isValid) {
                return true;
            }

        }
    }
    return false;
};