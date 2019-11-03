const express = require('express')
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const multer = require('multer');
const uploadConfig  = require('./config/upload');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const upload  = multer(uploadConfig);

const routes = express.Router();

routes.post('/users', SessionController.store);

routes.post('/spots', upload.single('thumbnail'),SpotController.store);
routes.post('/spots/:spot_id/bookings',BookingController.store);

routes.get('/spots',SpotController.index);

routes.get('/dashboard',DashboardController.index);


module.exports = routes;