const Router = require('express').Router
const mongoose = require('mongoose')

const MONGO_URL = "mongodb://localhost:27017/mongoosedb"

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const MSG = {
  regSuccess: "Registered successfully",
  regDuplicate: "Username taken?",
  loginSuccess: "Logged In succesfully",
  badCred: "Bad Credentials"
}

const pass = require("../utils/pass.js")
const User = require('../model/User.js')

const router = Router()

router.post('/register', async (req, res) => {
  var { username, password } = req.body
  var user = new User({ username, password })
  try {
    await user.save()
    res.send(MSG.regSuccess)
  } catch (err) {
    console.log(err)
    res.send(MSG.regDuplicate)
  }


})


router.post('/login', (req, res) => {

})

module.exports = router