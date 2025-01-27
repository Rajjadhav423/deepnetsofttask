const mongoose = require('mongoose');

// Define schema
const brunchCocktailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

// Create model
const BrunchCocktail = mongoose.model('BrunchCocktail', brunchCocktailSchema);

module.exports = BrunchCocktail;
