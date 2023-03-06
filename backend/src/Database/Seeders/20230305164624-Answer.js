'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('answers', [
      {
        answer: 'ARDUÍNO',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'accepted',
        visibility: 'public',
      },
      {
        answer: 'BOBINA',
        category_id: 1,
        user_id: 2,
        rarity: 'rare',
        status: 'accepted',
        visibility: 'public',
      },
      {
        answer: 'CÂMERA',
        category_id: 1,
        user_id: 2,
        rarity: 'common',
        status: 'accepted',
        visibility: 'public',
      },
      {
        answer: 'DVD PLAYER',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'accepted',
        visibility: 'private',
      },
      {
        answer: 'BAFO',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'accepted',
        visibility: 'private',
      },
      {
        answer: 'LEITE CONDENSADO',
        category_id: 4,
        user_id: 1,
        rarity: 'common',
        status: 'accepted',
        visibility: 'public',
      },
      {
        answer: 'NUVEM',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'rejected',
        visibility: 'public',
      },
      {
        answer: 'CABELEIRA DO ZEZÉ',
        category_id: 1,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'private',
      },
      {
        answer: 'LUTINHA',
        category_id: 2,
        user_id: 2,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'public',
      },
      {
        answer: 'MELOCOTON',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'public',
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('answers', null, {});
  }
};
