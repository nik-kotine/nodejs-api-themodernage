const express = require('express');
const db = require('./database');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET all songs
app.get('/songs', (req, res) => {
  db.all("SELECT * FROM songs", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET song by id
app.get('/songs/:id', (req, res) => {
  db.get("SELECT * FROM songs WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

// POST new song
app.post('/songs', (req, res) => {
  const { title, artist, year, album } = req.body;
  db.run("INSERT INTO songs (title, artist, year, album) VALUES (?, ?, ?, ?)",
    [title, artist, year, album],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, title, artist, year, album });
    });
});

// PUT update song
app.put('/songs/:id', (req, res) => {
  const { title, artist, year, album } = req.body;
  db.run("UPDATE songs SET title=?, artist=?, year=?, album=? WHERE id=?",
    [title, artist, year, album, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    });
});

// DELETE song
app.delete('/songs/:id', (req, res) => {
  db.run("DELETE FROM songs WHERE id=?", req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`🎸 Indie Rock API running on http://localhost:${PORT}`);
});