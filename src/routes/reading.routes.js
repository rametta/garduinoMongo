const express = require('express')
const router = express.Router()
const Reading = require('./../models/reading.model')

router.get('/api/readings', (req, res, next) => {
  Reading.find({})
    .sort([['date', -1]])
    .limit(+req.query.limit || 20)
    .then((readings) => res.send(readings))
})

// get all the readings for a specific pot
router.get('/api/readings/pot/:id', (req, res, next) => {
  Reading.find({ potId: req.body.id })
    .sort([['date', -1]])
    .limit(+req.query.limit || 20)
    .then((readings) => res.send(readings))
})

router.get('/api/readings/:id', (req, res, next) => {
  Reading.findById(req.params.id).then((reading) => res.send(reading))
})

router.post('/api/readings', (req, res, next) => {
  new Reading(req.body)
    .save()
    .then((reading) => res.send(reading))
    .catch((err) => res.status(400).send(err))
})

router.put('/api/readings', (req, res, next) => {
  Reading.updateOne({ _id: req.body.id }, req.body.reading)
    .then((reading) => res.send(reading))
    .catch((err) => res.status(400).send(err))
})

router.delete('/api/readings', (req, res, next) => {
  Reading.remove({ _id: req.body.id })
    .then((suc) => res.send({ msg: 'Reading deleted' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = router
