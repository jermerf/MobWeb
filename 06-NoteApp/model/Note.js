const { Schema, model } = require('mongoose')

const NoteSchema = new Schema({
  content: String,
  username: String
})

const Note = model("Note", NoteSchema)

module.exports = Note