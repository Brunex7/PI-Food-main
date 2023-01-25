const { Router } = require('express');
const routeRecipe = require('../routes/otherRoute/routeRecipe')


const mainRouter = Router();

mainRouter.use("/recipes", routeRecipe);


module.exports = mainRouter;