const { Diet } = require('../db')

const createDiet = async (name, userId) => {
    const newDiet = await Diet.create({name});
    await newDiet.setDiet(userId);
    return newDiet;
};

module.exports = { createDiet }