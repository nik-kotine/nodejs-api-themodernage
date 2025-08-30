const db = require('./database');

const songs = [
  { title: "Mr. Brightside", artist: "The Killers", year: 2003, album: "Hot Fuss" },
  { title: "Take Me Out", artist: "Franz Ferdinand", year: 2004, album: "Franz Ferdinand" },
  { title: "I Bet You Look Good on the Dancefloor", artist: "Arctic Monkeys", year: 2005, album: "Whatever People Say I Am, That's What I'm Not" },
  { title: "Seven Nation Army", artist: "The White Stripes", year: 2003, album: "Elephant" },
  { title: "Reptilia", artist: "The Strokes", year: 2003, album: "Room on Fire" },
  { title: "There, There", artist: "Radiohead", year: 2004, album: "Hail to the Thief" }
];

songs.forEach(song => {
  db.run(
    "INSERT INTO songs (title, artist, year, album) VALUES (?, ?, ?, ?)",
    [song.title, song.artist, song.year, song.album],
    function(err) {
      if (err) {
        console.error("Error insertando canción:", err.message);
      } else {
        console.log(`Canción agregada con id ${this.lastID}: ${song.title}`);
      }
    }
  );
});

setTimeout(() => {
  db.close();
  console.log("Base de datos cerrada. Seed terminado.");
}, 1000);
