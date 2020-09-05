const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
 
const app = express()
//conectando servidor Moongosee
mongoose.connect('Coloque seu servidor do mongosee para Rodar a API',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)


