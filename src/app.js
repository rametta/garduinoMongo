const express = require('express')
const bodyParser = require('body-parser')

const gardens = require('./routes/garden.routes')
const pots = require('./routes/pot.routes')
const readings = require('./routes/reading.routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((err, req, res, next) => console.log(err))
app.use('/api/gardens', gardens)
app.use('/api/pots', pots)
app.use('/api/readings', readings)

module.exports = app
