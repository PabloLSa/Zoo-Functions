const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((especie) => especie.name === animal)[0].residents
    .every((idade) => idade.age >= age);

  return animals;
}

module.exports = getAnimalsOlderThan;
