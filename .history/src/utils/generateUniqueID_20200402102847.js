crypto = require('crypto')

modules.export = function generateUniqueID() {
    return crypto.randomBytes(4).toString('HEX');
}