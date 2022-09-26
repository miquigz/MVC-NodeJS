const express = require('express');
const { notImplementedDELETE, notImplementedPOST, notImplementedPUT, notImplementedGET } = require('../controller/noMatch');
const routerNoMatch = express.Router();

/* ---------------------------- GET Routes ------------------------------ */
routerNoMatch.get('*', notImplementedGET);

/* ---------------------------- POST Routes  ------------------------------ */
routerNoMatch.post('*', notImplementedPOST);

/* ---------------------------- DELETE Routes  ------------------------------ */
routerNoMatch.delete('*', notImplementedDELETE);


/* ---------------------------- PUT Routes  ------------------------------ */
routerNoMatch.put('*', notImplementedPUT);

module.exports = routerNoMatch;