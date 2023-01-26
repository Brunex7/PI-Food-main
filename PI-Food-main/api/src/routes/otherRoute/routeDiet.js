const {Router} = require('express');
const routeDiet = Router();
const {dietHandlerCreate} = require ('../../handlers/handlerDiet');
const validateDiet = require ('../../middleware/midDiet');

routeDiet.post("/",validateDiet ,dietHandlerCreate);

module.exports = routeDiet;