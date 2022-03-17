'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('conversations', {
      id: Sequelize.INTEGER,
      user1Id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      },
      user2Id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
            schema: "schema",
          },
          key: "id",
        },
        allowNull: false,
      },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('conversations');
  }
};
