const axios = require('axios');
const e = require('express');
const {Recipe, Diet} = require('../db');
const {API_KEY} = process.env;

const cleanArr = (arr) =>
    arr.data.results.map((e)=>{
        return{
            id: e.id,
            name: e.title,
            image: e.image,
            healthScore: e.healthScore,
            summary: e.summary,
            steps: e.analyzedInstructions[0]?.steps.map((p) => {
                return p.step;
            }),
            diets: e.diets.join(", "),
            create: false,
        };
    });

const getApiRecipes = async () => {
    const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const apiInfo = cleanArr(apiUrl)
    return apiInfo;
};

const getDbRecipes = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};

const getAllRecipe = async () =>{
    const apiInfo = await getApiRecipes();
    const dbInfo = await getDbRecipes();
    const totalInfo = [...dbInfo, ...apiInfo];
    return totalInfo;
};

const searchRecipeByName = async (name) => {
    const dbRecipes = await Recipe.findAll({ where: { name: name }})
    const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    const apiInfo = cleanArr(apiUrl)
    
    const filterApi = apiInfo.filter((e)=> e.name.toLowerCase().includes(name.toLowerCase()));
    return [ ...filterApi, ...dbRecipes];
}

const createRecipe = async (name, image, healthScore, summary, steps, diets) =>
    await Recipe.create({name, image, healthScore, summary, steps, diets}
);

const getRecipeById = async (id, source) =>{
    const recipe = 
    source === "api" 
        ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data
        : await Recipe.findByPk(id);
    return recipe;
};

module.exports = { 
    createRecipe,
    getRecipeById,
    getAllRecipe,
    searchRecipeByName,
};