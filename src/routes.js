const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

//Arquivo de rotas

const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const RequestController = require('./controllers/RequestController')

const routes = express.Router()
const upload = multer(uploadConfig)

//Rotas de seções
routes.post('/sessions', SessionController.store) 
//Rotas de spots
routes.get('/spots', SpotController.index) 
routes.post('/spots', upload.single('thumbnail'),SpotController.store) 
//rotas de profiles
routes.get('/profiles', ProfileController.show) 
//rotas de conexão de usuario com spots
routes.post('/spots/:spot_id/requests', RequestController.store) 

module.exports = routes