'use strict';
const { User } = require('../models');

module.exports = {
  async up(queryInterface) {
    const chiumbo = await User.findOne({ where: { username: 'chiumbo' } });
    const thomas = await User.findOne({ where: { username: 'thomas' } });
    const hualing = await User.findOne({ where: { username: 'hualing' } });
    const santiago = await User.findOne({ where: { username: 'santiago' } });

    await queryInterface.bulkInsert(
      'conversations',
      [
        {
          user1Id: chiumbo.id,
          user2Id: thomas.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user2Id: hualing.id,
          user1Id: thomas.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user1Id: thomas.id,
          user2Id: santiago.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('conversations', null, {});
  },
};
