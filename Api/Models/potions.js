const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const potionsSchema = new Schema({
   nombre: {
      type: String,
      required: true
   },
   descripcion: {
      type: String,
      required: true
   },
   imagen: {
      type: Object,
      public_id: String,
      secure_url: String,
      default: null
   },
   cantidad: {
      type: String,
      required: true
   },
   precio: {
      type: String,
      required: true
   },
   categoria: {
      type: Array,
      default: [],
      required: true
   },
});

const Potions = mongoose.model('Potions', potionsSchema);
module.exports = Potions