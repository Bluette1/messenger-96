const crypto = require('crypto');

const createSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};
const encryptPassword = function (plainPassword, salt) {
  return crypto.createHash('RSA-SHA256').update(plainPassword).update(salt).digest('hex');
};
const correctPassword = function (password, salt, savedPassword) {
  return encryptPassword(password, salt) === savedPassword;
};

module.exports = {createSalt, encryptPassword, correctPassword};