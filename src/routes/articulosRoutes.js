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

router.get('/articulos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const articulo = await Articulo.findOne({ id: id });

        if (!articulo) {
            return res.status(404).send('Articulo no encontrada');
        }

        res.json(articulo);
    } catch (error) {
        console.error("Error al obtener la Articulo: ", error);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para crear un nuevo documento
router.post('/articulos', async (req, res) => {
    try {
        const newArticulo = new Articulo(req.body);
        await newArticulo.save();
        res.json(newArticulo);
    } catch (error) {
        console.error("Error al crear articulo: ", error);
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;