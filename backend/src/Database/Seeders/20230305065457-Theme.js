'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('themes', [
      { name: 'VARIEDADES' },
      { name: 'DIVERTIDAS' },
      { name: 'CONHECIMENTOS GERAIS' },
      { name: 'CINEMA E TV' },
      { name: 'NATUREZA' },
      { name: 'VOCABULÁRIO' },
      { name: 'COMPLETE A FRASE' },
      { name: 'ESPORTES' },
      { name: 'COMIDA' },
      { name: 'ENTRETENIMENTO' },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
