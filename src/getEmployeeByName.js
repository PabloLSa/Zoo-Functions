const { employees } = require('../data/zoo_data');
// funcao principal
function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.filter((employee) => employee.firstName === employeeName || employee
    .lastName === employeeName)[0];
}

module.exports = getEmployeeByName;
