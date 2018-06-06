const router = require('./../router')

// /api/readings

router.get('/', (req, res, next) => {
  res.send({ test: 'get' })
})

router.post('/', (req, res, next) => {
  res.send({ test: 'post' })
})

router.put('/', (req, res, next) => {
  res.send({ test: 'put' })
})

router.delete('/', (req, res, next) => {
  res.send({ test: 'del' })
})

module.exports = router
