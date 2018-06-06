const express = require('express')
const router = express.Router()
const Garden = require('./../models/garden.model')

router.get('/api/gardens', (req, res, next) => {
  Garden.find({}).then((gardens) => res.send(gardens))
})

router.get('/api/gardens/:id', (req, res, next) => {
  Garden.findById(req.params.id).then((garden) => res.send(garden))
})

router.post('/api/gardens/', (req, res, next) => {
  new Garden({ name: req.body.name })
    .save()
    .then((garden) => res.send(garden))
    .catch((err) => res.status(400).send(err))
})

router.put('/api/gardens/', (req, res, next) => {
  Garden.updateOne({ _id: req.body.id }, req.body.garden)
    .then((garden) => res.send(garden))
    .catch((err) => res.status(400).send(err))
})

router.delete('/api/gardens/', (req, res, next) => {
  Garden.remove({ _id: req.body.id })
    .then((suc) => res.send({ msg: 'Garden deleted' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = router
