const express = require('express')
const bodyParser = require('body-parser')
const api = require('./middleware/api.js')

const PORT = 8080

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", api)

app.use(express.static("static"))

app.listen(PORT, () => console.log(`Listening on port [${PORT}]`))