////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two arguments, numbers that represent a start and end
//O: an array containing all the numbers from start and including end
function range(start, end, step = 1) {
  let result = []; // Initialize an empty array to store the range

  // Handle the case where start and end are the same
  if (start === end) {
    return result; // Return an empty array
  }

  // Handle positive step
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  // Handle negative step
  else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result; // Return the final array
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array of numbers
//O: sum of the numbers
function sum(array) {
  let result = 0;//we are returning a number
  //loop through the array of numbers
  for (let i = 0; i < array.length; i++){
    result += array[i];
  }
return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array
//O: a new array that has the same elements in invese order
function reverseArray(array) {
  let resultArray = [];
  //loop through the array
  for (let i = array.length - 1; i >= 0; i--){
    resultArray.push(array[i]);
  }
  return resultArray;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
///loop through only half of the array
for (let i = 0; i < Math.floor(array.length / 2); i++){
  //swap the current element with its corresponding element from the end
  let temp = array[i];//store the current element in a temporary variable
  array[i] = array[array.length - 1 - i];//replace the current element with the corresponding element from the end
  array[array.length - 1 - i] = temp;
}
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null; // Start with an empty list
  // Loop through the array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }; // Build the list
  }
  return list; // Return the final list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = []; // Initialize an empty array
  // Loop through the list
  for (let node = list; node; node = node.rest) {
    array.push(node.value); // Add the current value to the array
  }
  return array; // Return the final array
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return { value: element, rest: list }; // Create a new list with the element at the front
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
  let node = list; // Start at the head of the list
  let count = 0; // Initialize a counter
  // Loop through the list
  while (node) {
    if (count === index) {
      return node.value; // Return the value if the index matches
    }
    node = node.rest; // Move to the next node
    count++; // Increment the counter
  }
  return undefined; // Return undefined if the index is out of bounds
}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function deepEqual(valueOne, valueTwo) {
  // If both values are the same, return true
  if (valueOne === valueTwo) {
    return true;
  }

  // If either value is null or not an object, return false
  if (
    valueOne === null ||
    typeof valueOne !== 'object' ||
    valueTwo === null ||
    typeof valueTwo !== 'object'
  ) {
    return false;
  }

  // Handle arrays
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) {
      return false;
    }
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEqual(valueOne[i], valueTwo[i])) {
        return false;
      }
    }
    return true;
  }

  // Handle objects
  const keysOne = Object.keys(valueOne);
  const keysTwo = Object.keys(valueTwo);

  // If the number of keys is different, return false
  if (keysOne.length !== keysTwo.length) {
    return false;
  }

  // Recursively compare each property
  for (let key of keysOne) {
    if (!keysTwo.includes(key) || !deepEqual(valueOne[key], valueTwo[key])) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};