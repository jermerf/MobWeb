
// console.log("starting...")

// setTimeout(() => {
//   console.log("Timeout complete")
// }, 2000)

// console.log("...Done")

var prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 2000)
})

prom.then(() => {
  console.log("Promise resolved")
})

prom.then(() => {
  console.log("I was waiting too!")
})

prom.then(() => console.log("Short arrow function"))


// Broken out variables for everything

var promiseTask = (resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 2000)
}
var promiseDoneTask1 = () => {
  console.log("Promise resolved")
}
var promiseDoneTask2 = () => {
  console.log("I was waiting too!")
}
var promiseDoneTask3 = () => console.log("Short arrow function")

function promiseDoneTask4() {

}

var prom = new Promise(promiseTask)

prom.then(promiseDoneTask1)

prom.then(promiseDoneTask2)

prom.then(promiseDoneTask3)

prom.then(promiseDoneTask4)



