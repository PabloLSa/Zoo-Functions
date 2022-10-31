const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const getSpeciesById = species.filter((specie) => ids.includes(specie.id));
  return getSpeciesById;
};

module.exports = getSpeciesByIds;
