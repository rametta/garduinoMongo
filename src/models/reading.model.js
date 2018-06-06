const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReadingSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Date is required'],
    default: Date.now
  },
  potId: { type: String, required: [true, 'Pot ID is required'] },
  soilTemp: Number,
  soilMoisture: Number,
  humidity: Number,
  light: Number
})

const Reading = mongoose.model('reading', ReadingSchema)

module.exports = Reading
