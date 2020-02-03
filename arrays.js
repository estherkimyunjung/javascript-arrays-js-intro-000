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

function addElementToEndOfArray(array, element) {
  
  
}

function 