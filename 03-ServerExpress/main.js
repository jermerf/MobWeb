const express = require('express')
const api = require("./middleware/api.js")

const PORT = 3000

var app = express()
app.use(async (req, res, next) => {
  console.log(req.url);
  next()
})

app.get("/", (req, res, next) => {
  res.send(`<h1>Welcome!</h1>
    <a href="/tesla">Tesla</a>
    <a href="/edison">Edison</a>
  `)
  next()
})

app.use((req, res, next) => {
  if (res.headersSent) {
    console.log("This is the end of the request")
  } else {
    console.log("More to do")
    next()
  }
})

// Must be before express static serving
api(app)

app.use(express.static("static"))



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `)
})
