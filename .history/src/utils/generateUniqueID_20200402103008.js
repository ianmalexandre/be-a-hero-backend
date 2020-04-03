crypto = require('crypto')

modules.exports = function generateUniqueID() {
    return crypto.randomBytes(4).toString('HEX');
}