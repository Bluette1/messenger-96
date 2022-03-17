'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('users', {
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        photoUrl: Sequelize.STRING,
        password: Sequelize.STRING,
        salt: Sequelize.STRING,
      });  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
