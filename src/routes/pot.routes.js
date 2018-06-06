const router = require('./../router')
const Pot = require('./../models/pot.model')

// /api/pots

router.get('/', (req, res, next) => {
  Pot.find({}).then((pots) => res.send(pots))
})

router.get('/:id', (req, res, next) => {
  Pot.findById(req.params.id).then((pot) => res.send(pot))
})

router.post('/', (req, res, next) => {
  new Pot(req.body)
    .save()
    .then((pot) => res.send(pot))
    .catch((err) => res.status(400).send(err))
})

router.put('/', (req, res, next) => {
  Pot.updateOne({ _id: req.body.id }, req.body.pot)
    .then((pot) => res.send(pot))
    .catch((err) => res.status(400).send(err))
})

router.delete('/', (req, res, next) => {
  Pot.remove({ _id: req.body.id })
    .then((suc) => res.send({ msg: 'Pot deleted' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = router
