const express = require('express')
const app = express();
const appRouter = require('./routes/appRouter')

 app.use('/',appRouter)