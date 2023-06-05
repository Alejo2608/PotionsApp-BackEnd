const Potions=require("../Models/potions")
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');


//Traer todas las Pociones

const allPotions=async(req,res)=>{
    await Potions.find({})
    .then(data => {

      res.json(data)

    });
}

//Crear Pocion

const createPotions = async (req, res) => {
    try {
      console.log(req)
       if (!req.file) return res.status(404).json({messageError: 'Debes agregar una imagen de la pocion'})
       const { path } = req.file;
 
       const { nombre, descripcion, imagen, cantidad, precio, categoria } = req.body;
       let potion = await Potions.findOne({ nombre });
       console.log(potion);
       if (potion) return res.status(404).json({messageError: 'Ya existe esta pocion'});
 
       potion = new Potions({ nombre, descripcion, imagen, cantidad, precio, categoria });
       console.log(potion);
       if (path) {
          const result = await uploadImageEvent(path)
          await fs.unlink(path)
          potion.imagen = {public_id: result.public_id, secure_url: result.secure_url}
       }
       await potion.save()
       return res.status(200).json({potion: potion._id});
    } catch (error) {
       // console.log(error.message);
       return res.status(500).json({messageError: error.message});
    }
 }
 
const updatePotion = async (req, res) => {
   try {
      let path;
      if (!!req.file) {
         // console.log(`Se guardara el archivo: ${req.file.path}`);
         path = req.file.path;
      }
   
      const { potionID } = req.params;
      const update = req.body;

      if (path !== undefined) {
         let potion = await Potions.findById(potionID)
         await deleteImage(potion.imagen.public_id)
         const result = await uploadImageEvent(path)
         await fs.unlink(path)
         update.imagen = {public_id: result.public_id, secure_url: result.secure_url}
         potion = await Potions.findByIdAndUpdate(potionID, update, {new: true})
         return res.status(200).json({potion: potion._id})
      }
      const potion = await Potions.findByIdAndUpdate(potionID, update, {new: true})
      return res.status(200).json({potion: potion._id})
   } catch (error) {
      return res.status(500).json({messageError: error.message});
   }
}

// Elima una pocion por ID
const deletePotion = async (req, res) => {
   try {
      const potionID = req.params.potionID;
      const potion = await Potions.findByIdAndDelete(potionID)

      if (!potion) return res.status(404).json({messageError: 'Esta pocion no existe'})

      await deleteImage(potion.imagen.public_id)
      return res.status(204).send()
   } catch (error) {
      return res.status(404).json({messageError: error.message});
   }
}

 module.exports={
    createPotions,
    allPotions,
    updatePotion,
    deletePotion
 }