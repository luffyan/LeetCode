/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    var totalUnits = 0;
    boxTypes.sort((a, b) => (b[1] - a[1]));
    var size = 0;
    
    for(var i = 0; i < boxTypes.length; i++) {
        var box = boxTypes[i];
        if(box[0] + size <= truckSize) {
            totalUnits += box[0] * box[1];
            size += box[0];
        } else {
            var remainBox = truckSize - size;
            totalUnits += remainBox * box[1];
            return totalUnits;
        }
    }
    return totalUnits;
};