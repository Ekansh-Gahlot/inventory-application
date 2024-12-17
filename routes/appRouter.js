const express = require('express');
const appRouter = express.Router();
const appController = require('../controllers/controller')

appRouter.get('/',appController.displayHomePage)

appRouter.get('/games', appController.displayGamePage)

appRouter.get('/update-games',appController.displayUpdateGame);

appRouter.post('/update-games', appController.updateGame)

appRouter.get('/developers',appController.displayDeveloperPages)

appRouter.get('/update-developers',appController.displayUpdateDevelopers)

appRouter.post('/update-developers',appController.updateDevelopers)

appRouter.get('/genres', appController.displayGenres)

appRouter.get('/update-genres', appController.displayUpdateGenres)

appRouter.post('/update-genres', appController.updateGenres)

module.exports = appRouter;

