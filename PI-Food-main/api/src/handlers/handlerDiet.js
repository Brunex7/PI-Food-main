const { getDiet } = require('../controlers/controlDiet')
const { Diet } = require('../db')

const getDietHandler = async (req, res) =>{
    await getDiet()
    const allDiets = await Diet.findAll() 
    
    res.status(200).json(allDiets)
}

module.exports = {getDietHandler,}