/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    var importance = 0;
    
    var importanceHelper = (currId) => {
        
        if(currId === null) return;
        
        for(var employee of employees) {
            if(employee.id === currId) {
                importance += employee.importance;
            
                var subs = employee.subordinates;
                for (var subId of subs){
                    importanceHelper(subId);
                }
            }
        }
        
    }
    importanceHelper(id);
    return importance;
};