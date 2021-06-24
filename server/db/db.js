const Sequelize = require("sequelize");
const db = new Sequelize(process.env.DATABASE_URL || "postgresql://mary:password@localhost:5432/messenger", {

  logging: false
});

async function tryConnection() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

tryConnection();

module.exports = db;