'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('answers', [
      {
        answer: 'ARDUÍNO',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'pending',
      },
      {
        answer: 'BOBINA',
        category_id: 1,
        user_id: 2,
        rarity: 'rare',
        status: 'pending',
      },
      {
        answer: 'CÂMERA',
        category_id: 1,
        user_id: 2,
        rarity: 'common',
        status: 'pending',
      },
      {
        answer: 'DVD PLAYER',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'pending',
      },
      {
        answer: 'BAFO',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
      },
      {
        answer: 'LEITE CONDENSADO',
        category_id: 4,
        user_id: 1,
        rarity: 'common',
        status: 'accepted',
      },
      {
        answer: 'NUVEM',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'rejected'
      },
      {
        answer: 'CABELEIRA DO ZEZÉ',
        category_id: 1,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
      },
      {
        answer: 'LUTINHA',
        category_id: 2,
        user_id: 2,
        rarity: 'unknown',
        status: 'pending',
      },
      {
        answer: 'MELOCOTON',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('answers', null, {});
  }
};
