const Request = require('../models/Request')

module.exports = {

    //Criação de conexão com spot e usuario
    async store(req, res) {
        const { user_id } = req.headers
        const { spot_id } = req.params
        const { date } = req.body

        const request = await Request.create({ 
            user: user_id,
            spot: spot_id,
            date,
        })

        await request.populate('spot').populate('user').execPopulate()

        return res.json(request)

    }
}