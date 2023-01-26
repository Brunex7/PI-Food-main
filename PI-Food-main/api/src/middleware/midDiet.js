const validateDiet = (req, res, next) => {
    const { name } = req.body;
    if(!name) return res.status(400).json({error: 'Missing name'})

    next();
}

module.exports = validateDiet;