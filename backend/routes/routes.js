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
/**
 * @swagger
 * components:
 *  schemas:
 *      Booking:
 *          type: object
 *          properties:
 *              fechaCita: 
 *                  type: date
 *              estado: 
 *                  type: string
 *              idCliente: 
 *                  type: string
 *              idTatuador: 
 *                  type: string
 *              idPiercing: 
 *                  type: string
 *              idTatuaje: 
 *                  type: string
 *          required:
 *              - fechaCita
 *              - estado
 *              - idCliente
 *              - idTatuador
 *          example:
 *              fechaCita: 2023-11-02T12:30:00
 *              estado: activa
 *              idCliente: 65070c3b5dc80e4398f960a9
 *              idTatuador: 6518678fbd8dc7609a105f63
 *              idTatuaje: 4733749379739857345735
 */

/**
 * @swagger
 * /api/v1/showbooking:
 *  get:
 *      summary: show dates
 *      tags: [Booking]
 *    
 *      responses:
 *          200:
 *              description: all bookings
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Booking'
 */
router.get('/showbooking', controllerBooking.showBookingController);
/**
 * @swagger
 * /api/v1/newbooking:
 *  post:
 *      summary: create a new date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: new date created success
 */
router.post('/newbooking', controllerBooking.createBookingController);
/**
 * @swagger
 * /api/v1/updatebooking:
 *  put:
 *      summary: update a date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: new date updated successfully
 *          404:
 *              description: booking not found
 */
router.put('/updatebooking', controllerBooking.updateBookingController);
/**
 * @swagger
 * /api/v1/deletebooking:
 *  delete:
 *      summary: delete a date
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  chema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: date deleted
 *          400:
 *              description: date not found
 */
router.delete('/deletebooking', controllerBooking.deleteBookingController);

//Clients
/**
 * 
 */
router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.put('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);

//Piercings
router.get('/showpiercing', controllerPiercings.showPiercingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);
router.put('/updatepiercing', controllerPiercings.updatePiercingController);
router.delete('/deletepiercing', controllerPiercings.deletePiercingController);

//Tattoos
router.get('/showtattoo', controllerTattoos.showTattooController);
router.post('/newtattoo', controllerTattoos.createTattooController);
router.put('/updatetattoo', controllerTattoos.updateTattooController);
router.delete('/deletetattoo', controllerTattoos.deleteTattooController);

//Users
router.get('/showusers', controllerUsers.showUserController);
router.post('/newuser', controllerUsers.createUserController);
router.put('/updateuser', controllerUsers.updateUserController);
router.delete('/deleteuser', controllerUsers.deleteUserController);

//tattooartists
router.get('/showtattooartist', controllerTattooArtists.showTattooArtistController);
router.post('/newtattooartist', controllerTattooArtists.createtattooArtistController);
router.put('/updatetattoartist', controllerTattooArtists.updatetattooArtistController);
router.delete('/deletetattoortist', controllerTattooArtists.deletetattooArtistController);
module.exports = router