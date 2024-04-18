const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.authenticate = (req, res, next) => {
  // Extract token from header
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied, token not provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach user to request object
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.authorize = (roles) => {
  return (req, res, next) => {
    // Check if user's role is authorized
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden, not authorized' });
    }
    next();
  };
};
