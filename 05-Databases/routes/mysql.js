const Router = require('express').Router
const mysql = require('mysql')
const pass = require("../utils/pass.js")

const router = Router()

const MSG = {
  regSuccess: "Registered successfully",
  loginSuccess: "Logged In succesfully",
  badCred: "Bad Credentials"
}

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodedb"
})

router.post('/register', (req, res) => {
  var { username, password } = req.body
  var passHash = pass.hash(password)

  var query = `
    INSERT INTO auth (username, password) VALUE (
      ${mysql.escape(username)}, 
      ${mysql.escape(passHash)}
    )
  `
  db.query(query, (error, rows, fields) => {
    if (error) {
      res.send(error)
      return
    }
    res.send(MSG.regSuccess)
  })

})


router.post('/login', (req, res) => {
  var { username, password } = req.body

  var query = `SELECT * FROM auth WHERE username=${mysql.escape(username)} LIMIT 1`

  db.query(query, (error, rows, fields) => {
    if (error) {
      res.send(error)
      return
    }

    if (rows.length != 1) {
      res.send(MSG.badCred)
    }

    var hash = rows[0].password

    if (pass.verify(password, hash)) {
      res.send(MSG.loginSuccess)
    } else {
      res.send(MSG.badCred)
    }
  })
})
module.exports = router