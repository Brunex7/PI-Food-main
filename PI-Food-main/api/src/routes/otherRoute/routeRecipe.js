const {Router} = require('express');
const { 
    getRecipeHandlerId,
    createRecipeHandler,
    getRecipesHandler 
} = require('../../handlers/handlerRecipe');

const routeRecipe = Router();

routeRecipe.use("/", getRecipesHandler);
routeRecipe.use("/:id", getRecipeHandlerId);
routeRecipe.use("/", createRecipeHandler);


module.exports = routeRecipe;