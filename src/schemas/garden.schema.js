const mongoose = require('mongoose')
const PotSchema = require('./pot.schema')
const Schema = mongoose.Schema

const GardenSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  description: String,
  pots: [PotSchema]
})

module.exports = GardenSchema
