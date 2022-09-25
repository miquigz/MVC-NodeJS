const { json } = require('express');
const express = require('express');
const app = express();
// console.log(app)

// Middleware: statics pages
app.use(express.static('public')); // Cuando quiero servir páginas estáticas

// Middleware: POST, PUT, PATCH
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Enviroment variable
// console.log('__dinarme:', __dirname)

let contadorVisitas = 0
const productos = []
let idProducto = 0

/* ---------------------------- GET Routes ------------------------------ */

app.get('/', (req, res) => {
    /* res.send('<h1>Hola desde express</h1>') */
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/info', (req, res) => {
    res.send('<h2 style="color:green;">Servidor express OK</h2>')
})

app.get('/visitas', (req, res) => {
    res.send(`<h2 style="color:blue;">Visitas: ${++contadorVisitas}</h2>`)
})

app.get('/reset', (req, res) => {
    contadorVisitas = 0
    res.send('<h3 style="color:violet;">Reset OK!</h3>')
})

/* app.get('/api/productos', (req, res) => {
    res.json(productos)
}) */

/* GET ALL/ GET ONE  - READ - request para listar todos o un producto */
app.get('/api/productos/:id?', (req, res) => {
    let id = req.params.id
    //console.log(id)
    if(id) {
        let producto = productos.find(producto => producto.id == id) || {}
        res.json(producto)
    } else {
        res.json(productos)
    }
})

app.get('*', (request, response) => {
    let url = request.url
    let method = request.method
    response.status(404).send(`<h3 style="color:orangered;">La ruta ${url} del método ${method} no está implementada</h3>`)
})

/* ---------------------------- POST Routes  ------------------------------ */

app.post('/', (req, res) => {
    res.send('Ruta POST')
})

/*POST - CREATE : request to add a product     */
app.post('/api/productos', (req, res) => {
    let producto = req.body
    producto.id = ++idProducto
    //console.log(producto)
    productos.push(producto)
    /* res.json(producto) */
    res.redirect('/')
})

app.post('*', (req, res) => {
    let url = req.url
    let method = req.method
    res.status(404).send(`<h3 style="color:purple;">La ruta ${url} del método ${method} no está implementado</h3>`)
})

/* ---------------------------- PUT Routes  ------------------------------ */
/* PUT - UPDATE: request to add a product */

app.put('/api/productos/:id', (req, res) => {
    let id = req.params.id
    let producto = req.body
    producto.id = id

    let index = productos.findIndex(producto => producto.id == id)
    productos.splice(index,1,producto)

    res.json(producto)
})

app.put('*', (req, res) => {
    let url = req.url
    let method = req.method
    res.status(404).send(`<h3 style="color:crimson;">La ruta ${url} del método ${method} no está implementado</h3>`)
})

/* ---------------------------- DELETE Routes  ------------------------------ */
// Delete: Request to delete a product
app.delete('/api/productos/:id', (req, res) => {
    let id = req.params.id

    let index = productos.findIndex(producto => producto.id == id)
    let producto = productos.splice(index,1)[0]
    res.json(producto)
})

app.delete('*', (req, res) => {
    let url = req.url
    let method = req.method
    res.status(404).send(`<h3 style="color:crimson;">La ruta ${url} del método ${method} no está implementado</h3>`)
})




const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error en el servidor express: ${error.message}`))
