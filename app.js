const express = require('express')
const app = express();
const appRouter = require('./routes/appRouter');
const path = require('path');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.use('/',appRouter)

app.listen(3000,()=>{
    console.log('App listening on port 3000')
});