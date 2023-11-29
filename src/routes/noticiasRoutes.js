const express = require('express');
const router = express.Router();
const Noticia = require('../models/Noticia');


router.get('/noticias', async (req, res) => {
    try {
        const noticias = await Noticia.find({});
        res.json(noticias);
    } catch (error) {
        res.status(500).send("Error al obtener las noticias: " + error.message);
    }
});

module.exports = router;