const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// Statische Dateien aus dem "images" Ordner bedienen
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route zum Laden der Bilder aus einem bestimmten Ordner
app.get('/load-images/:folder', async (req, res) => {
    const folder = req.params.folder;
    try {
        const folderPath = path.join(__dirname, 'images', folder);
        const files = await fs.readdir(folderPath);

        // Filtere nur Bilder (z.B. mit Endungen wie .jpg, .png)
        const images = files.filter(file => {
            return /\.(jpg|jpeg|png|gif)$/i.test(file);
        }).map(file => {
            return `images/${folder}/${file}`;
        }); 

        res.json({ images });
    } catch (error) {
        console.error('Fehler beim Laden der Bilder:', error);
        res.status(500).json({ error: 'Internes Serverfehler' });
    }
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
