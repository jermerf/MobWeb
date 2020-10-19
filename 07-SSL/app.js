const fs = require('fs')
const https = require('https')
const express = require('express')

const IS_HTTPS = true
const HTTPS_FILES = {
  // cert: fs.readFileSync("C:\\Certbot\\live\\supernotes.duckdns.org\\cert.pem"),
  // key: fs.readFileSync("C:\\Certbot\\live\\supernotes.duckdns.org\\privkey.pem")
  cert: fs.readFileSync("certs/cert.pem"),
  key: fs.readFileSync("certs/key.pem")
}


const PORT = 3000

var app = express()

app.use(express.static('public'))

if (IS_HTTPS) {
  var server = https.createServer(HTTPS_FILES, app)
  server.listen(PORT, () => console.log(`Secure on port ${PORT}`))
} else {
  app.listen(PORT, () => console.log(`Listening on port --->> ${PORT}`))
}

