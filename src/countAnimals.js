const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  const quantidade = {};
  if (!animal) {
    species
      .forEach((specie) => { quantidade[specie.name] = specie.residents.length; });
    return quantidade;
  }

  const specie = species.find((element) => element.name === animal.specie);
  if (animal.sex) {
    return specie.residents
      .reduce((acc, curl) => (curl.sex === animal.sex ? acc + 1 : acc), 0);
  }
  return specie.residents.length;
};
console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
