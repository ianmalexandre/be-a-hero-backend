export default generateUniqueID() {
    return crypto.randomBytes(4).toString('HEX');
}