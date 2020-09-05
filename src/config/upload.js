const multer = require('multer')
//path serve para mostrar o Caminho para o Multer jogar as imagens
const path = require('path')

//Conexão com multer para Add imagens a pasta Upload Com o nome da propria imagem
module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname,'..', '..', 'uploads'),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const name = path.basename(file.originalname, ext)

        cb(null,`${name}-${Date.now()}${ext}`)
    },
  }),  
}
