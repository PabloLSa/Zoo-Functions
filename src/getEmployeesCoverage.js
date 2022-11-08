const { employees } = require('../data/zoo_data');

function getEmployeesCoverage(dados) {
  if (!dados) {
    return employees.map((dado) => employees)[0];
  }
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
