var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1]

function addElementToBeginningOfArray(array, element) {
  array.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ["foo", ...array]
}

function addElementToEndOfArray(array, element) {
  array.push("foo");
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...array, "foo"]
}
