const express = require('express')
const router = express.Router()
const RinconGourmet = require('../models/RinconGourmet')


router.get('/rincongourmets/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const gourmet = await RinconGourmet.findById(id);

        if (!gourmet) {
            return res.status(404).send('Rincon Gourmet no encontrado');
        }

        res.json(gourmet);
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});


module.exports = router;