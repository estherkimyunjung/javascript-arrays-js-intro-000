var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array
}

function addElementToEndOfArray(array, element) {
}

function destructivelyAddElementToEndOfArray(array, element) {
}
