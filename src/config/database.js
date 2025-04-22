// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book_management', 'root', 'P&Jvv^bhKXm0', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;