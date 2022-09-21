// Write your solution in this file!
const employee = {
    name: "Celestino Martinez",
    streetAddress: "1700 Crotona Park East"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const copyEmployee = {...obj}
    copyEmployee[key] = value
    return copyEmployee

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj.key = value
    return obj
}

function deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}