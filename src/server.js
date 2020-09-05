const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
 
const app = express()
//conectando servidor Moongosee
mongoose.connect('mongodb://projeto1:123456j@projeto01-shard-00-00-wgosz.mongodb.net:27017,projeto01-shard-00-01-wgosz.mongodb.net:27017,projeto01-shard-00-02-wgosz.mongodb.net:27017/test?ssl=true&replicaSet=projeto01-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)


