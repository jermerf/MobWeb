//         i                          j
//         0  1  2  3  4  5  6  7  8  9
var arr = [4, 1, 6, 2, 5, 3, 7, 8, 9, 0]

console.log(`Before ${arr}`)
for (var i = 0; i < arr.length; i++) {
  var haveSwapped = false
  for (var j = arr.length - 1; j > i; j--) {
    if (arr[j] < arr[j - 1]) {
      var tmp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = tmp
      haveSwapped = true
    }
  }

  if (!haveSwapped) {
    break
  }
}
console.log(`After ${arr}`)
