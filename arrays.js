var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  chocolateBars.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ["foo", ...chocolateBars]
}

function addElementToEndOfArray(array, element) {
  chocolateBars.push("foo");
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...chocolateBars, "foo"]
}