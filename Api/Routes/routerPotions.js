const express = require('express');
const { upload } = require('../Controllers/uploadController');
const { createPotions, allPotions, deletePotion } = require('../Controllers/potionsControllers')

const router = express.Router()


//Obtener Pociones
router.get('/potions', allPotions)
// Crea una Pocion
router.post('/create-potions', upload.single('imagen'), createPotions)
// Actualizar una Pocion
router.post('/update-potions/:potionID', upload.single('imagen'), createPotions)
// Eliminar una Pocion
router.post('/delete-potion/:potionID', deletePotion)

module.exports = router