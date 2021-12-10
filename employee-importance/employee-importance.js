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
    for(var employee of employees) {
        map[employee.id] = employee;
    }
    console.log(map);
    
    var findImportance = (id) => {
        var employee = map[id];
        //console.log(employee);
        // if(!employee.subordinates) {
        //     return employee.importance;
        // }
        var sum = 0;
        for(var subId of employee.subordinates) {
            sum += findImportance(subId);
        }
        return sum + employee.importance;
    };
    
    return findImportance(id);
    
}
    


// find the employees' all subordinates importances, 
// add that to the importance of employee itself

