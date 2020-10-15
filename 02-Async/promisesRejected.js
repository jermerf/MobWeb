
var prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I have completed my quest!")
  }, 1000)
  // Fake timeout error
  setTimeout(() => {
    reject({ errno: 4352, msg: "Timeout, took too long" })
  }, 2000)
}).then(arg => {
  console.log("Timeout resolved", arg);
  return arg.toUpperCase()
}).catch(err => {
  console.log("Timeout rejected", err);
}).then(argUpper => {
  console.log("I have reached the end", argUpper)
  return argUpper.substr(argUpper.length / 2)
})

var prom2 = new Promise((resolve, reject) => {
  resolve("resolution 2")
})

var allPromises = Promise.all([prom1, prom2, Promise.resolve("Auto resolved")])

allPromises.then(arg => {
  console.log("All promises complete", arg);
}).catch(() => {
  console.log("At least one promise failed.. le sad");
})