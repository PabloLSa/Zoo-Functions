const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const animal = employees.find((employee) => employee.id === id)
    .responsibleFor[0]; // econtrar o animal que colaborador id está cuidando

  const oldAnimal = species.find((specie) => specie.id === animal) // mostrando o animal mais velho que o colaborador cuida
    .residents.reduce((acc, cur) => {
      const idade = acc.age > cur.age ? acc : cur;

      return idade;
    });
  return Object.values(oldAnimal);
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
