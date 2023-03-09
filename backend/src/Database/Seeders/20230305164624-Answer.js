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
        letter: 'A',
      },
      {
        answer: 'BOBINA',
        category_id: 1,
        user_id: 2,
        rarity: 'rare',
        status: 'accepted',
        visibility: 'public',
        letter: 'B',
      },
      {
        answer: 'CÂMERA',
        category_id: 1,
        user_id: 2,
        rarity: 'common',
        status: 'accepted',
        visibility: 'public',
        letter: 'C',
      },
      {
        answer: 'DVD PLAYER',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'accepted',
        visibility: 'private',
        letter: 'D',
      },
      {
        answer: 'BAFO',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'accepted',
        visibility: 'private',
        letter: 'B',
      },
      {
        answer: 'LEITE CONDENSADO',
        category_id: 4,
        user_id: 1,
        rarity: 'common',
        status: 'accepted',
        visibility: 'public',
        letter: 'L',
      },
      {
        answer: 'NUVEM',
        category_id: 1,
        user_id: 2,
        rarity: 'unknown',
        status: 'rejected',
        visibility: 'public',
        letter: 'N',
      },
      {
        answer: 'CABELEIRA DO ZEZÉ',
        category_id: 1,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'private',
        letter: 'C',
      },
      {
        answer: 'LUTINHA',
        category_id: 2,
        user_id: 2,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'public',
        letter: 'L',
      },
      {
        answer: 'MELOCOTON',
        category_id: 2,
        user_id: 1,
        rarity: 'unknown',
        status: 'pending',
        visibility: 'public',
        letter: 'M',
      },
    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('answers', null, {});
  }
};
