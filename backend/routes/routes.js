const express = require('express');
const router = express.Router();

//Controllers
const controllerBooking = require('../controller/booking.controller');
const controllerClients = require('../controller/clients.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattooArtists = require('../controller/tattooartists.controller');
const controllerTattoos = require('../controller/tattoos.controller');
const controllerUsers = require('../controller/users.controller');

//Booking
router.get('/showbooking', controllerBooking.showBookingController);
router.post('/newbooking', controllerBooking.createBookingController);
router.post('/updatebooking', controllerBooking.updateBookingController);
router.delete('/deletebooking', controllerBooking.deleteBookingController);

//Clients

router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);

//Piercings
router.get('/showpiercing', controllerPiercings.showPiercingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);
router.post('/updatepiercing', controllerPiercings.updatePiercingController);
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);

//Tattoos
router.get('/showtattoo', controllerTattoos.showTattooController);
router.post('/newtattoo', controllerTattoos.createTattooController);
router.post('/updatetattoo', controllerTattoos.updateTattooController);
router.delete('/deletetattoo', controllerTattoos.deleteTattooController);

//Users
router.get('/showusers', controllerUsers.showUserController);
router.post('/newuser', controllerUsers.createUserController);
router.post('/updateuser', controllerUsers.updateUserController);
router.delete('/deleteuser', controllerUsers.deleteUserController);

//tattooartists
router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
router.post('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router