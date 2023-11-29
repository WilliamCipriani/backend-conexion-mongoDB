const express = require('express')
const cors = require('cors');
const noticiasRoutes = require('./routes/noticiasRoutes')
const articulosRoutes = require('./routes/articulosRoutes')
const rinconGourmetsRoutes = require('./routes/rinconGourmetsRoutes')


const app = express()
app.use(cors());

app.use(express.json())

app.use('/api', noticiasRoutes)
app.use('/api',articulosRoutes)
app.use('/api/',rinconGourmetsRoutes)


module.exports = app;
