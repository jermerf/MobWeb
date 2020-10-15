
var prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timeout complete")
  }, 1000)
  setTimeout(() => {
    reject("!!!Timeout rejected!!!")
  }, 2000)
})


async function asyncFirst() {
  try {
    var result = await prom
    console.log("The promise has completed", result)
  } catch (err) {
    console.log("Promise rejected, aka, async caught", err);
  }
}

async function asyncSecond() {
  var result = await new Promise(resolve => setTimeout(() => {
    resolve("kittens")
  }, 1000))
  return result.toUpperCase()
}

async function main() {
  var res1 = await asyncFirst()
  var res2 = await asyncSecond()
  console.log({ res1, res2 })
}

main();