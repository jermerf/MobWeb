const express = require('express')

const PORT = 3000

var app = express()

app.use(async (req, res, next) => {
  console.log(req.url);
  next()
})

app.get("/", (req, res) => {
  res.send(`<h1>Welcome!</h1>
    <a href="/tesla">Tesla</a>
    <a href="/edison">Edison</a>
  `)
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} `)
})
