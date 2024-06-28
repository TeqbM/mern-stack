const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword(password) {
    const saltRounds = 10; // Adjust based on security needs (higher = more secure, but slower)
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log(hash);
        return hash;
    } catch (err) {
        console.error(err);
        throw new Error('Error hashing password');
    }
}
hashPassword("teqb@111");