const express = require('express');
const router = express.Router();
const Articulo = require('../models/Articulo');

router.get('/articulos', async (req, res) => {
    try {
        const articulos = await Articulo.find({});
        res.json(articulos);
    } catch (error) {
        res.status(500).send("Error al obtener las noticias: " + error.message);
    }
});

module.exports = router;