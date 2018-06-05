const mongoose = require('mongoose')
const ReadingSchema = require('./reading.schema')
const Schema = mongoose.Schema

const PotSchema = new Schema({
  name: String,
  description: String,
  gardenId: { type: String, required: [true, 'Garden ID is required'] },
  readings: [ReadingSchema]
})

module.exports = PotSchema
