//Controller : logic of my Application Backend, (product) (CRUD)
let {products, idProduct} = require('../model/products');

const getProducts = (req, res) => {
    let id = req.params.id;
    //console.log(id)
    if(id) { //if ID exist: return product, else: empty object.
        let product = products.find(product => product.id == id) || {} //ternario, return: empty object OR product.
        res.json(product)
    } else {
        res.json(products)
    }
}

// POST - Methods   (FORM METHOD)
const saveProduct = (req, res) => {
    let product = req.body
    product.id = ++idProduct;
    //console.log(producto)
    products.push(product)
    /* res.json(producto) */
    res.redirect('/')
}

//PUT - Methods
const updateProduct = (req, res) => {
    let id = req.params.id;
    let product = req.body;
    product.id = id;

    let index = products.findIndex(product => product.id == id);
    products.splice(index, 1 ,product);

    res.json(product);
}

// DELETE - Methods
const deleteProduct = (req, res) => {
    let id = req.params.id

    let index = products.findIndex(product => product.id == id)
    let product = products.splice(index,1)[0]
    res.json(product)
}

module.exports = {
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}

