// createDB.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./server/comments.db');

// Create a table for job posts with estimatedCost as REAL
db.serialize(() => {
  db.run(
    'CREATE TABLE IF NOT EXISTS job_posts (customerName TEXT, phone TEXT, email TEXT, freightType TEXT, freightWeight TEXT, destination TEXT, cargoLocation TEXT, jobDescription TEXT, specialCase TEXT, estimatedCost REAL)'
  );
});

db.close();
console.log('Database created and initialized.');
