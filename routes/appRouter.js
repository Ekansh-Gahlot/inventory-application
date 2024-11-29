const express = require('express');
const appRouter = express.Router();
const appController = require('../controllers/controller')

appRouter.get('/',appController.displayHomePage)

appRouter.get('/games', appController.displayGamePage)

appRouter.get('/update-games',appController.displayUpdateGame);

appRouter.post('/update-games', appController.updateGame)

appRouter.get('/developers',appController.developerPages)

module.exports = appRouter;