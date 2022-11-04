const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((element) => element.age < 18).length;

  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;

  const senior = entrants.filter((element) => element.age >= 50).length;

  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const soma = countEntrants(entrants).adult * prices.adult + countEntrants(entrants)
    .child * prices.child + countEntrants(entrants).senior * prices.senior;
  return soma;
};

module.exports = { calculateEntry, countEntrants };
