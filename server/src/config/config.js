require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbURI: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET,
};
