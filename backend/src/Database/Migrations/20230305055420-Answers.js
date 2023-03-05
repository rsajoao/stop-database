'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('answers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rarity: {
        type: Sequelize.ENUM('rare', 'common', 'unknown'),
        defaultValue: 'unknown'
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'category_id',
        foreignKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET DEFAULT',
        field: 'user_id',
        foreignKey: true,
      },
      status: {
        type: Sequelize.ENUM('accepted', 'rejected', 'pending'),
        defaultValue: 'pending',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('answers')
  }
};
