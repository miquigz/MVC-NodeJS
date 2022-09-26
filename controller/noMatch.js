//================ GET ==================
const notImplementedGET = (request, response) => {
    let url = request.url;
    let method = request.method;
    response.status(404).send(`<h3 style="color:orangered;">La ruta ${url} del método ${method} no está implementada</h3>`)
}
//================ POST ==================
const notImplementedPOST = (req, res) => {
    let url = req.url;
    let method = req.method;
    res.status(404).send(`<h3 style="color:purple;">La ruta ${url} del método ${method} no está implementado</h3>`);
}
//================ PUT ==================
const notImplementedPUT = (req, res) => {
    let url = req.url
    let method = req.method
    res.status(404).send(`<h3 style="color:crimson;">La ruta ${url} del método ${method} no está implementado</h3>`);
}
//================ DELETE ==================

const notImplementedDELETE = (req, res) => {
    let url = req.url;
    let method = req.method;
    res.status(404).send(`<h3 style="color:crimson;">La ruta ${url} del método ${method} no está implementado</h3>`);
}

module.exports = {
    notImplementedDELETE,
    notImplementedGET,
    notImplementedPOST,
    notImplementedPUT
}