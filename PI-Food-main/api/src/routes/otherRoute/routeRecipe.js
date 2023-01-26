const {Router} = require('express');
const { 
    getRecipeHandlerId,
    createRecipeHandler,
    getRecipesHandler 
} = require('../../handlers/handlerRecipe');
const validateRecipe = require('../../middleware/midRecipe');
const routeRecipe = Router();


routeRecipe.get("/", getRecipesHandler);

routeRecipe.get("/:id", getRecipeHandlerId);

routeRecipe.post("/", validateRecipe, createRecipeHandler);



module.exports = routeRecipe;