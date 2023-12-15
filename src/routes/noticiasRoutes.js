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

router.get('/noticias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const noticia = await Noticia.findOne({ id: id });

        if (!noticia) {
            return res.status(404).send('Noticia no encontrada');
        }

        res.json(noticia);
    } catch (error) {
        console.error("Error al obtener la Noticia: ", error);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para crear un nuevo documento
router.post('/noticias', async (req, res) => {
    try {
        const newNoticia = new Noticia(req.body);
        await newNoticia.save();
        res.json(newNoticia);
    } catch (error) {
        console.error("Error al crear noticia: ", error);
        res.status(500).send('Error en el servidor');
    }
});


// Ruta para obtener las noticias pendientes de aprobación
router.get('/pending', async (req, res) => {
    try {
        const pendingNoticias = await Noticia.find({ isApproved: false });
        res.json(pendingNoticias);
    } catch (error) {
        res.status(500).send('Error al obtener noticias pendientes: ' + error.message);
    }
});

module.exports = router;