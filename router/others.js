const express = require('express');
const routerOthers = express.Router();

//GET Controller Imports:
const { mainRoute, info, visits, resetVisits } = require('../controller/others');
//POST Controller Imports:
const { mainRoutePost } = require('../controller/others');
//PUT Controller Imports:

//DELETE Controller Imports:


/* ---------------------------- GET Routes ------------------------------ */
routerOthers.get('/', mainRoute);
routerOthers.get('/info', info);
routerOthers.get('/visitas', visits)
routerOthers.get('/reset', resetVisits)

/* ---------------------------- POST Routes  ------------------------------ */
routerOthers.post('/', mainRoutePost)



module.exports = routerOthers;