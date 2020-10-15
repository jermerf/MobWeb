const fs = require('fs')
const path = require('path')

var content = fs.readFileSync("./main.js").toString()

fs.writeFileSync("main-copy.js", content)

fs.mkdirSync(path.resolve("..", "02-Async"))
