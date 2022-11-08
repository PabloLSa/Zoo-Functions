const { species, hours } = require('../data/zoo_data');

const objetoDias = (scheduleTarget) => {
  const objeto = {};

  const dia = Object.keys(hours).find((day) => day === scheduleTarget);
  const { open } = hours[dia];
  const { close } = hours[dia];

  const objetoInterno = {};
  objetoInterno.officeHour = `Open from ${open}am until ${close}pm`;
  objetoInterno.exhibition = species.filter((specie) => specie.availability
    .some((day) => day === scheduleTarget)).map((object) => object.name);

  objeto[dia] = objetoInterno;
  const test = scheduleTarget === 'Monday'
    ? { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } } : objeto;
  return test;
};

const getSchedule = (scheduleTarget) => {
  if (species.find((nome) => nome.name === scheduleTarget)) { // econtrar dias de cada animal
    const diaAnimal = species.find((animal) => animal.name === scheduleTarget).availability;
    return diaAnimal;
  }
  if (Object.keys(hours).some((day) => day === scheduleTarget)) {
    return objetoDias(scheduleTarget);
  }
  const obJeto = {};
  Object.keys(hours).map((dia) => objetoDias(dia))
    .forEach((element) => {
      obJeto[Object.keys(element)[0]] = Object.values(element)[0];
    }); // horario e dia para cada animal dispponível
  console.log(obJeto);
  return obJeto;
};
getSchedule();

module.exports = getSchedule;
