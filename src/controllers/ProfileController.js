const Spot = require('../models/Spot')

module.exports = {
    //mostrar usuario com requisição id
    async show(req, res) {
        const { user_id } = req.headers

        const spot = await Spot.find({ user: user_id })
        
        return res.json(spot)
    }
}