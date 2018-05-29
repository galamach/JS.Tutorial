let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "New Jersey"
                , "North Carolina"];
function functionalFilterOne(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(functionalFilterOne(states));

function functionalFilterTwo(states) {
  return states.filter(state => state.includes('N'));
}
console.log(functionalFilterTwo(states));
