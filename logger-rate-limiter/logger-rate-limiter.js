
var Logger = function() {
    this.msgMap = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */



Logger.prototype.shouldPrintMessage = function(timestamp, message) {

        if(!this.msgMap.hasOwnProperty(message)) {
            this.msgMap[message] = timestamp;
            return true;
        } 
        else if(this.msgMap && this.msgMap.hasOwnProperty(message)) {
            if(this.msgMap[message] + 10 <= timestamp) {
                this.msgMap[message] = timestamp;
                return true;
            } else {
                return false;
            }
        } 
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */