const validateRecipe = (req, res, next) => {
    const { name, image, healthScore, summary, steps, diets } = req.body;
    if(!name) return res.status(400).json({error: 'Missing name'})
    if(!image) return res.status(400).json({error: 'Missing image'})
    if(!healthScore) return res.status(400).json({error: 'Missing healthScore'})
    if(!summary) return res.status(400).json({error: 'Missing summary'})
    if(!steps) return res.status(400).json({error: 'Missing steps'})
    if(!diets) return res.status(400).json({error: 'Missing diets'})

    next();
}

module.exports = validateRecipe;