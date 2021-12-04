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
    // build a map
    var map = {};
    var importance = 0;
    for(var employee of employees) {
        map[employee.id] = employee;
    }
    
    var calcImportance = (currId) => {
        var employeeInfo = map[currId];
        importance += employeeInfo.importance;
        var subIds = employeeInfo.subordinates;
        for(var id of subIds) {
            calcImportance(id);
        }
    }
    calcImportance(id);
    return importance;
};


//     importanceHelper(id);
//     return importance;