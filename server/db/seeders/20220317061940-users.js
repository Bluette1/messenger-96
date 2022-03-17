'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'thomas',
          email: 'thomas@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914467/messenger/thomas_kwzerk.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'santiago',
          email: 'santiago@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/775db5e79c5294846949f1f55059b53317f51e30_s3back.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'chiumbo',
          email: 'chiumbo@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/8bc2e13b8ab74765fd57f0880f318eed1c3fb001_fownwt.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'hualing',
          email: 'hualing@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/6c4faa7d65bc24221c3d369a8889928158daede4_vk5tyg.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'ashanti',
          email: 'ashanti@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/68f55f7799df6c8078a874cfe0a61a5e6e9e1687_e3kxp2.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'julia',

          email: 'julia@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914468/messenger/d9fc84a0d1d545d77e78aaad39c20c11d3355074_ed5gvz.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'cheng',
          email: 'cheng@email.com',
          password: '123456',
          photoUrl:
            'https://res.cloudinary.com/dmlvthmqr/image/upload/v1607914466/messenger/9e2972c07afac45a8b03f5be3d0a796abe2e566e_ttq23y.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
