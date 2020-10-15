const { Schema, model } = require('mongoose')
const pass = require('../utils/pass.js')

const UserSchema = new Schema({
  username: { type: String, unique: true, index: true },
  password: String,
  lastLogin: {
    on: Date,
    from: String
  }
})

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  this.password = pass.hash(this.password)
})

const User = model("User", UserSchema)

module.exports = User