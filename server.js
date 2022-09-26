const { json } = require('express');
//Express import
const express = require('express');
//Ruteo import
const routerProducts = require('./router/products');
const routerOthers = require('./router/others');
const routerNoMatch = require('./router/noMatch');

const app = express();



// Middleware: statics pages
app.use(express.static('public')); // Cuando quiero servir páginas estáticas

// Middleware: POST, PUT, PATCH
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ----------- Middleware: Router (Ruteo)--------------------
app.use('/api/productos', routerProducts);
app.use('/', routerOthers);
app.use('/', routerNoMatch);


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en el servidor express: ${error.message}`))



// 1:20 video profee
//no anda api/productos, ver dsp 