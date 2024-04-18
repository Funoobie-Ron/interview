require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/mean_stack_app',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
};
