const { response } = require("express")

const root = (req, res, next) => {
  res.send({})
}

const withParams = (req, res, next) => {
  res.send({ params: req.params })
}


const fakeDb = [
  { username: "Tesla", age: 7 },
  { username: "Edison", age: 4 }
]

const getUserInfo = (req, res, next) => {
  var user = fakeDb.find(el => el.username.toLowerCase() == req.params.uname.toLowerCase())

  if (user) {
    res.send(user)
  } else {
    res.send({
      error: "No such user",
      username: req.params.uname
    })
  }
}


const withQuery = (req, res, next) => {

  var userByUname = (req.query.username
    ? fakeDb.find(el => el.username.toLowerCase() == req.query.username.toLowerCase())
    : "no username provided")

  var userByAge = (req.query.age
    ? fakeDb.find(el => el.age == req.query.age)
    : "no age provided")

  if (!userByAge)
    userByAge = null

  res.send({ query: req.query, userByUname, userByAge })
}

var sendForm = (req, res) => {
  res.send(`
    <form action="/api/query">
    <input name="username" />
    <input name="age" />
    <button>Send</button>
    </form>
  `)
}

module.exports = app => {
  app.use("/api/form", sendForm)
  app.use("/api/user/:uname", getUserInfo)
  app.use("/api/query", withQuery)
  app.use("/api/:chicken", withParams)
  app.use("/api", root)
}





