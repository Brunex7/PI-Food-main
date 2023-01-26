const { Router } = require('express');
const routeRecipe = require('../routes/otherRoute/routeRecipe')
const routeDiet = require('../routes/otherRoute/routeDiet')

const mainRouter = Router();

mainRouter.use("/recipes", routeRecipe);
mainRouter.use("/diets", routeDiet);

module.exports = mainRouter;