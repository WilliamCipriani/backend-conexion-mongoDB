const mongoose = require('mongoose')

const contenidoSchema = new mongoose.Schema({
    type: String,
    text: String,
    text1: String,
    text2: String,
    items: [String],
    src: String,
    alt: String
}, { _id: false });

const articuloSchema = new mongoose.Schema({
    id: String,
    titleHeader: String,
    metaDescripcion: String,
    title: String,
    subtitle: String,
    imageFirst: String,
    imageAvatar: String,
    author: String,
    area: String,
    dateCreated: Date,
    summary: String,
    content: [contenidoSchema]
});

const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;