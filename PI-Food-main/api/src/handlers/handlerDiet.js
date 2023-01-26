const {createDiet} = require('../controlers/controlDiet')

const dietHandlerCreate = (req, res) =>{
    const {name, userId} = req.body;
    try {
        const newDiet = createDiet(name, userId)
        res.status(201).json(newDiet);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {dietHandlerCreate,}