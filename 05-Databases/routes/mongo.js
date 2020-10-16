const Router = require('express').Router
const MongoClient = require('mongodb').MongoClient
const pass = require("../utils/pass.js")

const MONGO_URL = "mongodb://localhost:27017"

var db = null
MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
  .then(client => {
    db = client.db("mobweb")
  })

const router = Router()

const MSG = {
  regSuccess: "Registered successfully",
  loginSuccess: "Logged In succesfully",
  badCred: "Bad Credentials"
}

router.post('/register', async (req, res) => {
  var { username, password } = req.body
  var passHash = pass.hash(password)

  var user = {
    username,
    password: passHash,
    lastLogin: {
      on: new Date(),
      from: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    }
  }

  var dbRes = await db.collection("users").insertOne(user)

  res.send(dbRes)
})


router.post('/login', async (req, res) => {
  var { username, password } = req.body

  var user = await db.collection("users").findOne({ username })

  if (!user) {
    res.send(MSG.badCred)
    return
  }

  if (pass.verify(password, user.password)) {
    res.send(MSG.loginSuccess)
  } else {
    res.send(MSG.badCred)
  }
})

module.exports = router