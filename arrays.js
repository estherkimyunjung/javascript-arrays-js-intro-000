var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var addElementToBeginning = [element, ...array];
  return addElementToBeginning
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var addElementToEnd = [...array, element];
  return addElementToEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  var result = array.slice(1);
  return result
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}




