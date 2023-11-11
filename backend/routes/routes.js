const express = require('express');
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercing = require('../controller/piercings.controller');
const controllerTattoo = require('../controller/tattoos.controller');
const controllerUser = require('../controller/users.controller');
const controllerTattoArtist= require('../controller/tattooartists.controller');

// client
router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);

// tattoo
router.get('/showtattoo', controllerTattoo.showTattooController);
router.post('/newtattoo', controllerTattoo.createTattooController);
router.post('/updatetattoo', controllerTattoo.updateTattooController);
router.delete('/deletetattoo', controllerTattoo.deleteTattooController);

// users
router.get('/showuser', controllerUser.showUserController);
router.post('/newuser', controllerUser.createUserController);
router.post('/updateuser', controllerUser.updateUserController);
router.delete('/deleteuser', controllerUser.deleteUserController);

// tattoartist
router.get('/showtattoartist', controllerTattoo.showTattooController);
router.post('/newtattoartist', controllerTattoo.createTattooController);
router.post('/updatetattoartist', controllerTattoo.updateTattooController);
router.delete('/deletetattoartist', controllerTattoo.deleteTattooController);

// booking
router.get('/showbooking', controllerBooking.showBookingController);
router.post('/newbooking', controllerBooking.createBookingController);
router.post('/updatebooking', controllerBooking.updateBookingController);
router.delete('/deletebooking', controllerBooking.deleteBookingController);

// piercing
router.get('/showpiercing', controllerPiercing.showPiercingController);
router.post('/newpiercing', controllerPiercing.createPiercingController);
router.post('/updatepiercing', controllerPiercing.updatePiercingController);
router.delete('/deletepiercing', controllerPiercing.deletePiercingController);


module.exports = router;
