const jwt = require('jsonwebtoken')
const User = require('../model/User.js')

const SECRET = require('../keys/jwt-secret.js')

const UNAUTHORIZED = { success: false, error: "Unauthorized" }

module.exports = async (req, res, next) => {
  const token = req.cookies.jwt
  if (!token) {
    res.send(UNAUTHORIZED)
    return
  }
  try {
    var payload = jwt.verify(token, SECRET)
  } catch (err) {
    res.send(UNAUTHORIZED)
    return
  }


  req.user = await User.findOne({ username: payload.username })
  if (!req.user) {
    res.send(UNAUTHORIZED)
    return
  }
  next()
}