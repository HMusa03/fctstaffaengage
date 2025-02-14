const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('./cbt.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create a table to store user IDs
        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                userId TEXT UNIQUE NOT NULL,
                used BOOLEAN DEFAULT 0,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }
});



module.exports = db;