const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./songs.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    year INTEGER,
    album TEXT
  )`);
});

module.exports = db;
