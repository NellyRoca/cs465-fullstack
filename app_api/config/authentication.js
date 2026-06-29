const jwt = require('jsonwebtoken');

// JWT AUTH MIDDLEWARE
function authenticateJWT(req, res, next) {

  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const parts = authHeader.split(' ');

  if (parts.length < 2) {
    return res.sendStatus(401);
  }

  const token = parts[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = verified; // attach decoded token
    next();

  } catch (err) {
    return res.sendStatus(401);
  }
}

module.exports = authenticateJWT;