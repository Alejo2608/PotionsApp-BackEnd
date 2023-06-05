const Potions = require('../Models/potions')
require('dotenv').config()

function addPotions() {
   Potions.insertMany([
      {
         nombre: 'Juggernoug',
         descripcion: "Bebida para tener mas vida",
         imagen: {
            public_id: 'PotionImage/perkJugger_udako2',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1685842205/PotionsImage/perkJugger_udako2.png'
         },
         cantidad: '7',
         precio: '2500',
         facultad: 'Facultad de ingenieria',
         categoria: ['Vida'],
      },
      {
         nombre: 'SpeedCola',
         descripcion: "Bebida para tener mas velocidad al recargar",
         imagen: {
            public_id: 'PotionImage/Speedcola_wbwgdo',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1685850434/PotionsImage/Speedcola_wbwgdo.png'
         },
         cantidad: '7',
         precio: '3000',
         categoria: ['Velocidad'],
      },
      {
         nombre: 'DoubleTap',
         descripcion: "Bebida para tener tiro doble",
         imagen: {
            public_id: 'PotionImage/dobletap_pnqlsm',
            secure_url:
               'https://res.cloudinary.com/dtne2vbok/image/upload/v1685850585/PotionsImage/dobletap_pnqlsm.png'
         },
         cantidad: '5',
         precio: '2000',
         categoria: ['Tiro'],
      }
   ])
}

module.exports = addPotions
