const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Menu', menuSchema);
