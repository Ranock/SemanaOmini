const multer = require('multer')
const path = require('path')

module.exports = {
    storage : multer.diskStorage({
        destination : path.resolve(__dirname,'..', '..', 'uploads'),
        filename : (req, file, cb)=>{
            const name = path.basename(file.originalname);
            const ext = path.extname(file.originalname);
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    })
}