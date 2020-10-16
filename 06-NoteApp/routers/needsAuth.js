const Router = require('express').Router
const auth = require('../middleware/auth.js')

const router = Router()

router.get('/needsAuth', auth, (req, res) => {
  res.send("You have been authenticated")
})

module.exports = router