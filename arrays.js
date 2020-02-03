var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = chocolateBars.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...chocolateBars];
}

function addElementToEndOfArray(array, element) {
  array = chocolateBars.push(element);
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...chocolateBars,element];
}
