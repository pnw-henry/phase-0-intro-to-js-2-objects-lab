const employee = {
    name: 'Henry',
    streetAddress: "812 N 36th"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";

    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";

    return employee;

}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    
    return employee;
}