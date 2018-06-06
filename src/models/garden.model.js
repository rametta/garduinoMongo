const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GardenSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  description: String
})

const Garden = mongoose.model('garden', GardenSchema)

module.exports = Garden
