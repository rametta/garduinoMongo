const router = require('./../router')
const Garden = require('./../models/garden.model')

// /api/gardens

router.get('/', (req, res, next) => {
  Garden.find({}).then((gardens) => res.send(gardens))
})

router.get('/:id', (req, res, next) => {
  Garden.findById(req.params.id).then((garden) => res.send(garden))
})

router.post('/', (req, res, next) => {
  new Garden({ name: req.body.name })
    .save()
    .then((garden) => res.send(garden))
    .catch((err) => res.status(400).send(err))
})

router.put('/', (req, res, next) => {
  Garden.updateOne({ _id: req.body.id }, req.body.garden)
    .then((garden) => res.send(garden))
    .catch((err) => res.status(400).send(err))
})

router.delete('/', (req, res, next) => {
  Garden.remove({ _id: req.body.id })
    .then((suc) => res.send({ msg: 'Garden deleted' }))
    .catch((err) => res.status(400).send(err))
})

module.exports = router
