const express = require('express')
const router = express.Router()
const Pot = require('./../models/pot.model')

router.get('/api/pots', (req, res, next) => {
  Pot.find({}).then((pots) => res.send(pots))
})

// get all the pots for a specific garden
router.get('/api/pots/garden/:id', (req, res, next) => {
  Pot.find({ gardenId: req.params.id }).then((pots) => res.send(pots))
})

router.get('/api/pots/:id', (req, res, next) => {
  Pot.findById(req.params.id).then((pot) => res.send(pot))
})

router.post('/api/pots', (req, res, next) => {
  new Pot(req.body)
    .save()
    .then((pot) => res.send(pot))
    .catch((err) => res.status(400).send(err))
})

router.put('/api/pots', (req, res, next) => {
  Pot.updateOne({ _id: req.body.id }, req.body.pot)
    .then((pot) => res.send(pot))
    .catch((err) => res.status(400).send(err))
})

router.delete('/api/pots', (req, res, next) => {
  Pot.remove({ _id: req.body.id })
    .then((suc) => res.send({ msg: 'Pot deleted' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = router
