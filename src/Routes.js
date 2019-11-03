const express = require('express')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const multer = require('multer');
const uploadConfig  = require('./config/upload');
const upload  = multer(uploadConfig);

const routes = express.Router();

routes.post('/users', SessionController.store);

routes.post('/spots', upload.single('thumbnail'),SpotController.store);

module.exports = routes;