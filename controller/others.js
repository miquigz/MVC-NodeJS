//CONTROLLER OTHERS
//================ GET ==================
let { contadorVisitas } = require("../model/others");

const mainRoute =  (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); /* res.send('<h1>Hola desde express</h1>') */ 
}

const info = (req, res) => {
    res.send('<h2 style="color:green;">Servidor express OK</h2>');
}
const visits = (req, res) => {
    res.send(`<h2 style="color:blue;">Visitas: ${++contadorVisitas}</h2>`);
}
const resetVisits = (req, res) => {
    contadorVisitas = 0;
    res.send('<h3 style="color:violet;">Reset OK!</h3>');
}

//================ POST ==================
const mainRoutePost = (req, res) => {
    res.send('Ruta POST')
}

//================ PUT ==================


//================ DELETE ==================


//
module.exports = {
    mainRoute,
    info,
    visits,
    resetVisits,
    mainRoutePost
}