const {Router} = require('express');
const routeDiet = Router();
const {getDietHandler} = require ('../../handlers/handlerDiet');


routeDiet.get("/",getDietHandler);

module.exports = routeDiet;