const Sequelize = require('sequelize');
const db = require('../db');
const {correctPassword, encryptPassword, createSalt} = require('../../helpers/encrypt');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    alloWNull: false,
    validate: {
      isEmail: true
    }
  },
  photoUrl: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      min: 6
    },
    allowNull: false,
    get() {
      return () => this.getDataValue('password');
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    }
  }
});

User.prototype.correctPassword = function (password) {
  return correctPassword(password, this.salt(), this.password());
};

User.createSalt = function () {
  return createSalt();
};

User.encryptPassword = function (plainPassword, salt) {
  return encryptPassword(plainPassword, salt);
};

const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.createSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});

module.exports = User;
