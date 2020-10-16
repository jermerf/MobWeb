const Router = require('express').Router
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const MONGO_URL = "mongodb://localhost:27017/noteapp"
const SECRET = require('../keys/jwt-secret.js')

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once("open", function () {
  console.log("** MongoDB database connection established successfully **");
});

const MSG = {
  regDuplicate: { success: false, error: "Username taken" },
  loginSuccess: { success: true, username: "" },
  badCred: { success: false, error: "Bad Credentials" }
}

const User = require('../model/User.js')

const router = Router()

async function Register(req, res, next) {
  var { username, password } = req.body
  var user = new User({ username, password })
  try {
    await user.save()
    next()
  } catch (err) {
    console.log(err)
    res.send(MSG.regDuplicate)
  }
}
async function Login(req, res) {
  const { username, password } = req.body
  let user = await User.findOne({ username })
  if (!user) {
    res.send(MSG.badCred)
    return
  }
  if (user.authenticate(password)) {
    var data = MSG.loginSuccess
    data.username = username
    var token = jwt.sign(data, SECRET)
    res.cookie('jwt', token)
    res.send(data)
  } else {
    res.send(MSG.badCred)
  }
}

router.post('/register', Register, Login)
router.post('/login', Login)

module.exports = router