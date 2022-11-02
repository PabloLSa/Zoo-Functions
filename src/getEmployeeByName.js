const { employees } = require('../data/zoo_data');
// funcao principal
function getEmployeeByName(employeeName) {
  if (!employeeName) {
    const name = {};
    return name;
  }
  const names = employees.filter((employee) => employee.firstName === employeeName || employee
    .lastName === employeeName);
  return names[0];
}
//
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
