const fs = require('fs')
const path = require('path')
const http = require('http')

var content = fs.readFileSync(path.resolve(".", "index.html"))

var server = http.createServer((req, res) => {
  console.log(req.url)
  switch (req.url) {
    case "/": res.end(content); break;
    case "/cat": res.end("Meow meow"); break;
    default: res.end("404"); break;
  }
})
server.listen(3001)