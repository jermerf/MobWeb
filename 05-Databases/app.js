const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('./routes/mysql.js')
const mongo = require('./routes/mongo.js')
const mongoose = require('./routes/mongoose.js')

const PORT = 8080
const app = express()

// Needed for Axios
app.use(bodyParser.json())

// Middleware to log Request
app.use((req, res, next) => {
  next()
  console.log(`URL: ${req.url}`)
})

app.use('/mysql', mysql)
app.use('/mongo', mongo)
app.use('/mongoose', mongoose)

app.use(express.static("public"))

app.listen(PORT, () => console.log(`Listening on port [ ${PORT} ]`))
