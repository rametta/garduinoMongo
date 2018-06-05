const mongoose = require('mongoose')
const GardenSchema = require('./../schemas/garden.schema')

const Garden = mongoose.model('garden', GardenSchema)

module.exports = Garden
