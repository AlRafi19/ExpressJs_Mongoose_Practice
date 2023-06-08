const jwt = require('jsonwebtoken');

const secretKey = "xyz";
const userId ="12345";

function generateToken(userId, secretKey) {
  const payload = { userId };
  const options = { expiresIn: '7h' };
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

module.exports = generateToken;