'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messages', {
      id: Sequelize.INTEGER,
      text: Sequelize.STRING,
      senderId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: false,
      },
      conversationId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'conversations',
            schema: 'schema',
          },
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('messages');
  },
};
