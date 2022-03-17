"use strict";
const { User } = require('../models');
const Conversation = require('../models/conversation');

module.exports = {
  async up(queryInterface, Sequelize) {
    const santiago = await User.findOne({ where: { username: "santiago" } });
    const thomas = await User.findOne({ where: { username: "thomas" } });
    const chiumbo = await User.findOne({ where: { username: "chiumbo" } });
    const hualing = await User.findOne({ where: { username: "hualing" } });

    const santiagoConvo = await Conversation.findOne({ where: { user2Id: santiago.id} });
    const chiumboConvo = await Conversation.findOne({ where: { user1Id: chiumbo.id} });
    const hualingConvo = await Conversation.findOne({ where: { user2Id: hualing.id} });

    await queryInterface.bulkInsert("messages", [{
      conversationId: santiagoConvo.id,
      senderId: santiago.id,
      text: 'Where are you from?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      conversationId: santiagoConvo.id,
      senderId: thomas.id,
      text: 'I\'m from New York',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      conversationId: santiagoConvo.id,
      senderId: santiago.id,
      text: 'Share photo of your city, please',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      conversationId: chiumboConvo.id,
      senderId: chiumbo.id,
      text: 'Sure! What time?',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      conversationId: hualingConvo.id,
      senderId: hualing.id,
      text: 'a test message',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      conversationId: hualingConvo.id,
      senderId: hualing.id,
      text: '😂 😂 😂',
      createdAt: new Date(),
      updatedAt: new Date(),
      
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
