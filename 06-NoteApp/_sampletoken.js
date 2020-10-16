const jwt = require('jsonwebtoken')

const SECRET = "k4j5kBs83kVD249gjwk39Gqkj0wkkG"

var payload = {
  username: "tesla",
  uid: "2343t3"
}

var token = jwt.sign(payload, SECRET)

console.log("User JWT Cookie value", token)

// Requiring authentication

var restoredPayload = jwt.verify(token, SECRET)
console.log("Restored payload: ", restoredPayload)
