const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PotSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  description: String,
  gardenId: { type: String, required: [true, 'Garden ID is required'] }
})

const Pot = mongoose.model('pot', PotSchema)

module.exports = Pot
