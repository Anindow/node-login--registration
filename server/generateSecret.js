const crypto = require("crypto");

// Generate a random string of the specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString("hex").slice(0, length);
}

const secret = generateRandomString(32); // Generate a 32-character random string
console.log("Generated JWT Secret:", secret);
