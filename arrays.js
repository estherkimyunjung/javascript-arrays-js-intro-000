var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  chocolateBars.unshift("foo");
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  ["foo", ...chocolateBars]
}