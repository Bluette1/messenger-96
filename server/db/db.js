const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL, {

  logging: false
});

// async function tryConnection() {
//   try {
//     await db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   } finally {
//     console.log("closing db connection");
//     await db.close();
//     console.log("db connection closed");
//   }
// }

// tryConnection();

module.exports = db;