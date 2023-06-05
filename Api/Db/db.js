require('dotenv').config();
const mongoose = require('mongoose');
const Potions = require('../Models/potions')
const addPotions = require('./dbPotions'); // Agrega las Pociones

mongoose.set('strictQuery', false)

mongoose.connect(process.env.URI) 
   .then(async()=> {
      const potions = await Potions.find().limit(1).lean();
      if (potions.length === 0) {
         addPotions()
         console.log('Pociones Agregados');
      }
      console.log('DB Conectada🚀')
   })
   .catch((e) => console.log("Fallo de Conexion " + e));