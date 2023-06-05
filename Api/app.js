const express = require('express')
const routerPotions = require("./Routes/routerPotions");
const morgan = require('morgan')
const cors=require('cors')
require('dotenv').config();
// MongoDB Connection
require('./Db/db');

// Settings
const app = express();


app.use(cors())
// Routes
app.use("/", routerPotions);

module.exports = app;