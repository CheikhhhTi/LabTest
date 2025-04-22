// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT =3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', bookRoutes);

// Sync database models
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
  })
  .catch(err => {
    console.error('Failed to synchronize database:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});