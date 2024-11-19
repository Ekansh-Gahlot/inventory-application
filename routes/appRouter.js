const express = require('express');
const appRouter = express.Router();
const appController = require('../controllers/controller')

appRouter.get('/',appController.displayHomePage)
