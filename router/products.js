const express = require('express'); //Traemos express.

const { getProducts, saveProduct, deleteProduct, updateProduct } = require('../controller/products');


const routerProducts = express.Router();
//POST - (CREATE) - request to add a product.
routerProducts.post('/api/productos', saveProduct);

//GET ALL/ONE (READ) - request to list all products/ one product.
routerProducts.get('./api/productos/id:?', getProducts);

//PUT - (UPDATE) - request to update a product. 
routerProducts.put('/api/productos/:id', updateProduct);

//DELETE - (DELETE) request to delete a product.
routerProducts.delete('/api/productos/:id',  deleteProduct);

module.exports = routerProducts;
