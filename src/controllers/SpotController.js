const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {

    //Cria um spot com a função requisitada
    async index(req, res) {
        const { role } = req.query

        const spots = await Spot.find({ role: role })

        return res.json(spots)
    },


    //controller para adicionar a imagem ao seu spot
    async store(req, res) {
        const { filename } = req.file
        const { company, role, adress } = req.body
        const { user_id } = req.headers 

        const user = await User.findById(user_id)
        if(!user) {
            return res.status(400).json({message: "User not found" })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            adress,
            role: role.split(',').map( role => role.trim()),

        })

        return res.json({ spot })
    
    }
}