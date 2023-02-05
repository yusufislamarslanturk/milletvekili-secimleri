const express = require('express');

const app = express();

app.listen(3000);

//template engine
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")

// db con

const dbConnect = require('./config/dbConnect');


//routes 
const index = require('./routes/index.js');

app.use("/",index);