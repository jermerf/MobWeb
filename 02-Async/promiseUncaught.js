
var prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  }, 1000)
})

prom.then(() => {
  console.log("Promise resolved")
}).catch(() => {
  console.log("Caught promise rejection");
}) 
