const mongoose = require('mongoose');

// URI de Conexión
const uri = "mongodb://localhost:27017/typsa-web"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Conectado a MongoDB con Mongoose");
    } catch (error) {
        console.error("Error al conectar a MongoDB: ", error);
    }
}

module.exports = { connect };