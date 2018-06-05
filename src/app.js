require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const gardens = require('./routes/garden.routes')
const pots = require('./routes/pot.routes')
const readings = require('./routes/reading.routes')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/gardens', gardens)
app.use('/api/pots', pots)
app.use('/api/readings', readings)

module.exports = app
