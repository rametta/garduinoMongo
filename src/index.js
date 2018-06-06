require('dotenv').config()
const mongoose = require('mongoose')

const app = require('./app')

const port = process.env.PORT || 8080

mongoose.Promise = global.Promise
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log('Listening on port:', port))
  })
  .catch(() => console.log('Could not connect to DB'))
