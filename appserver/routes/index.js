var express = require('express'); 
var router = express.Router(); 

var ctrlLocations = require('../controllers/locations'); 
var ctrlOthers = require('../controllers/others'); 
var ctrlMain = require('../controllers/main'); 

// Location-related routes
router.get('/', ctrlLocations.homelist); 
router.get('/location/sunny-beach-resort', ctrlLocations.locationsinfo);
router.get('/location/mountain-view-camp', ctrlLocations.locationsinfo1);
router.get('/location/city-lights-hotel', ctrlLocations.locationsinfo2);
router.get('/locations/review/new', ctrlLocations.addReview); 
router.get('/attractions', ctrlLocations.attractions);
// Other routes
router.get('/about', ctrlOthers.about); 
router.get('/signin', ctrlMain.signin); 
router.get('/review', ctrlMain.review);
router.get('/register', function(req, res, next) { 
    res.render('register', { title: 'Register' }); 
}); 

module.exports = router;
