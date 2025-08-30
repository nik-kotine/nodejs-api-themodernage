const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./songs.db');

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS songs", (err) => {
    if (err) console.error("Error borrando tabla:", err.message);
    else console.log("Tabla songs borrada.");
  });

  db.run(`
    CREATE TABLE songs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      artist TEXT NOT NULL,
      year INTEGER,
      album TEXT
    )
  `, (err) => {
    if (err) console.error("Error creando tabla:", err.message);
    else console.log("Tabla songs creada.");
  });
});

setTimeout(() => {
  db.close();
  console.log("Base de datos cerrada. Reset terminado.");
}, 1000);
