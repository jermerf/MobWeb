const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const Log = require('./model/Log.js')

const user = require('./routers/user.js')
const needsAuth = require('./routers/needsAuth.js')
const notes = require('./routers/notes.js')

const PORT = 3000

var app = express()

// Access cookies
app.use(cookieParser())

// For axios POST requests
app.use(bodyParser.json())

app.use(async (req, res, next) => {
  next()
  await new Log({ content: req.url }).save()
})

app.use(user)
app.use(needsAuth)
app.use('/note', notes)

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Listening on port [ ${PORT} ]`))