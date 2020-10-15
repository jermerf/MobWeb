function notAsync() {
  console.log("I am not a sink")
}

async function isAsync() {
  console.log("I am a sink! And proud of it?")
  if (Math.random() > 0.5) {
    throw "I am so unhappy with my odds..."
  }
  return "I am so resolved!"
}

notAsync()
var prom = isAsync()
prom.then(res => {
  console.log("isAsync completed with: ", res)
}).catch(rej => {
  console.log("isAsync FAILED with: ", rej)
})


console.log("----done----")