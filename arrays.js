var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = chocolateBars.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [element, ...chocolateBars]
}

function addElementToEndOfArray(array, element) {
  var array = chocolateBars.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...chocolateBars,element]
}
