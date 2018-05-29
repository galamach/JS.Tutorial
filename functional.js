let states = ["Kansas", "West Virginia", "Nebraska", "North Dakota", "South Dakota", "New Jersey"
                , "North Carolina"];

// Returns a complete URL under https://example.com/
// Example: "north dakota" -> "https://example.com/north-dakota"
function urlstart(string) {
  return ("https://example.com/" + urlify(string));
}

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
// function imperativeMap(states) {
//   let urlStates = [];
//   states.forEach(function(state) {
//     urlStates.push(urlify(state));
//   });
//   return urlStates;
// }
// console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}
// more map: url completion
function completeFunctionallMap(states) {
  return states.map(state => urlstart(state));
}
console.log(completeFunctionallMap(states));

// filter: Functional version
function functionalFilter(states) {
  return states.filter(state => state.split(/\s+/).length === 1);
}
console.log(functionalFilter(states));

// more filter: includes-Dakota Functional
function functionalDakotas(states) {
  return states.filter(state => state.includes('Dakota'));
}
console.log(functionalDakotas(states));

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// reduce: Functional solution
function functionalSum(array) {
  return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(a));

// reduce 2: another Functional solution
function functionalProd(array) {
  return array.reduce((total, n) => { return total *= n });
}
console.log(functionalProd(a));

// reduce object: Imperative solution
function imperativeLengths(states) {
  let lengths = {};
  states.forEach(function(state) {
    lengths[state] = state.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// reduce object: Functional solution
function functionalLengths(states) {
  return states.reduce((lengths, state) => {
                          lengths[state] = state.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));
