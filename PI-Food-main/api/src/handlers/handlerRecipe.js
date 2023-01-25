const {
    createRecipe,
    getRecipeById, 
    getAllRecipe, 
    searchRecipeByName,
} = require('../controlers/controlRecipe');

const getRecipesHandler = async (req, res) =>{
    const {name} = req.query;
    const results = name ? await searchRecipeByName(name) : await getAllRecipe();

    res.status(200).json(results);

};

const getRecipeHandlerId = async (req, res) =>{
    const {id} = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';

    try {
        const recipe = await getRecipeById(id, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.messege})
    }
};

const createRecipeHandler = async ( req, res) => {
    try {
        const {name, image, healthScore, summary, steps, diets} = req.body;
        const newRecipe = await createRecipe(name, image, healthScore, summary, steps, diets);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({error: error.messege})
    }
};

module.exports = {
    getRecipesHandler,
    getRecipeHandlerId,
    createRecipeHandler,
};