var typeNumber = 9
var typeNumberWithDeci = 1.23
var typeBoolean = true
var typeBooleanFromExpression = typeNumber > 5
var typeString = "We are words. \"Power Overwhelming!\""
var typeStringSingleQuote = ' I\'m also restricted to single line, \n\t btw so is "" '
var typeStringTemplateStrings = `We use backtick's which are the character to
the left of the [1] key. Also, we are able to be multiline
  If you wanted to say, drop a variable like this "${typeNumberWithDeci}" then you need
  to use \${variableName} and to show this I used the escape character \\
  Btw, heres 4 * 7 = ${4 * 7}
`

console.log(typeStringTemplateStrings)

var arr = [1, 2, 3, 4, true, "cat", { name: "Tesla", age: 7 }]
var obj = {
  make: "Hyundai",
  model: "Elantra",
  year: 2014,
  engine: {
    type: "ICE",
    volume: 1.8
  }
}

var validJson = {
  "make": "Hyundai",
  "model": "Elantra",
  "year": 2014
}

var aNullVar = null

obj.nullProp = null
obj.undefProp = undefined
// console.log(obj.nullProp.cat) // Throws error


var user = null

function setupSystem() {
  // something in the background, eventually gets user
  // something async that takes a while..
  user = { username: "Guest", token: null, favColor: "#5100ff" }
}


function restoreUserPreference() {
  // No user, can't load anything
  // truthiness
  if (!user) {
    console.log("*** User is not logged in/setup/whatever")
    return
  }

  // For example
  console.log(user.username)
}
setupSystem()
restoreUserPreference()
console.log("-------------------")

function sayName(name) {
  if (name) {
    console.log(`Hi there ${name}, how are you?`)
  } else {
    console.log("No name provided :(", name)
  }
}
var myCar = {
  make: "Hyundai",
  model: "Elantra",
  year: 2014,
  toString: function () {
    return `${this.make} ${this.model} from the year ${this.year},
    also, nicknamed "Doug"`
  }
}


var theirCar = {
  make: "Hyundai",
  model: "Sonata",
  year: 2019,
  toString() {
    return this.make + " " + this.model + " from the year " + this.year
  }
}
sayName()
sayName("")
sayName(undefined)
sayName(null)
sayName(0)
sayName("Tesla")
sayName(1 / 0)
sayName({ toString: function () { return "Moo" } })
sayName([])
sayName(theirCar)
sayName(myCar)

var names = ["Aaron", "Andrew", "Chelsey", "Hannah"]

names.push("Spencer")
var poppedOut = names.pop()

console.log(names, "after removing", poppedOut)

// --------------------------------

if (typeof (thisVariableExists) != 'undefined') {
  console.log("Something")
} else if (myCar.year > 2012) {
  console.log("Something else, with a 2012 car")
} else if (myCar.year > 2014) {
  if (myCar.make == "Hyundai") {
    console.log("Customer loyalty thing maybe?")
  } else {
    console.log("Different manufacture")
  }
} else if (myCar.year > 2017) {
  console.log("Something else, with a 2017 car")
} else {
  console.log("Something else, with all other cars")
}


var myName = "Joseph"

while (myName) {
  console.log("Printed from loop", myName)
  if (Math.random() < 0.1) {
    myName = false
  }
}


var i = 0
while (i < 10) {
  console.log(i)
  i = i + 2
}

for (var i = 0; i < 10; i += 2) {
  console.log(i)
}

names.push("Spencer")
names.push("Tesla")
names.push("Edison")

console.log(names)

for (var i = 0; i < names.length; i++) {
  console.log("i:", i, "name:", names[i])
}


// Index in array/Object
for (var fromArray in names) {
  console.log("in:", fromArray)
}

// Values in array(NOT objects)
for (var fromArray of names) {
  console.log("of:", fromArray)
}

for (var prop in myCar) {
  console.log("in(object): ", prop)
  console.log("in(object[prop]): ", myCar[prop])
}



// // Always works once
var initialized = false
var repeats = 0
var shouldRepeat = repeats > 0
do {
  if (!initialized) {
    // so some initialization
    //... then
    console.log("System initialized")
    initialized = true
  }
  console.log("processing ", repeats)
  repeats--
  shouldRepeat = repeats > 0
} while (shouldRepeat)
