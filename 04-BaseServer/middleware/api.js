const Router = require('express').Router

var router = Router()

const users = []

router.get("/", (req, res) => {
  res.send("Nothing to do, also this is mostly for POST requests")
})

router.post("/register", (req, res) => {
  var { username, password } = req.body

  if (!username || !password) {
    res.send("Need username and password")
    return
  }
  users.push({ username, password })
  res.send("registerd successfully")
})

router.post("/login", (req, res) => {
  var { username, password } = req.body

  if (!username || !password) {
    res.send("Need username and password")
    return
  }

  var user = users.find(el => el.username.toLowerCase() == username.toLowerCase())

  if (!user) {
    res.send("No user found")
    return
  }

  if (user.password == password) {
    res.send("Logged in!")
  } else {
    res.send("Incorrect password")
  }
})

module.exports = router