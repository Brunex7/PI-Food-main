const { Diet } = require('../db');
const axios = require('axios');
const {API_KEY} = process.env;

const getDiet = async () => {
    const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const diets = dietApi.data.results.map(e => e.diets).flat();
    const dietUnicas = [...new Set(diets)]
    dietUnicas.forEach( async e => {
         await Diet.findOrCreate({
            where: {name: e}
        })
    });
};

module.exports = { getDiet }