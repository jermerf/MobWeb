const Router = require('express').Router
const auth = require('../middleware/auth.js')
const Note = require('../model/Note.js')
const Log = require('../model/Log.js')

const router = Router()

const SUCCESS = { success: true }
const FAIL = { success: false }

router.get('/', auth, async (req, res) => {
  var notes = await Note.find({ username: req.user.username })
  res.send(notes)
})

router.post('/add', auth, async (req, res) => {
  var { content } = req.body

  var note = new Note({
    username: req.user.username,
    content
  })
  try {
    await note.save()
    SUCCESS.note = note
    res.send(SUCCESS)
    await new Log({ content: `New note by ${req.user.username}` }).save()
  } catch (err) {
    res.send(FAIL)
  }
})


module.exports = router