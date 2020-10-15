const bcrypt = require('bcrypt')
const { modelNames } = require('mongoose')

function hash(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function verify(password, hash) {
  return bcrypt.compareSync(password, hash)
}

module.exports = { hash, verify }