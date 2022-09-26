const express = require('express'); //Traemos express.
const routerProducts = express.Router();

const { getProducts, saveProduct, deleteProduct, updateProduct } = require('../controller/products');


//POST - (CREATE) - request to add a product.
routerProducts.post('/', saveProduct);

//GET ALL/ONE (READ) - request to list all products/ one product.
routerProducts.get('/:id?', getProducts);

//PUT - (UPDATE) - request to update a product. 
routerProducts.put('/:id', updateProduct);

//DELETE - (DELETE) request to delete a product.
routerProducts.delete('/:id',  deleteProduct);

module.exports = routerProducts;