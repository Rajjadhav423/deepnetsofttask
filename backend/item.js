const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
});

module.exports = mongoose.model('Item', itemSchema);
