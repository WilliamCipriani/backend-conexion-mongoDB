const mongoose = require('mongoose')

// Esquema para el contenido de la noticia
const contenidoSchema = new mongoose.Schema({
    type: String,
    text: String,
    items: [String],
    src: String,
    alt: String
}, { _id : false });

// Esquema principal para las noticias
const noticiasSchema = new mongoose.Schema({
    id: String,
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

const Noticia = mongoose.model('Noticia', noticiasSchema);

module.exports = Noticia;