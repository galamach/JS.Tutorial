let a = ["ant", "bat", "cat", 42];
a.forEach( (element) => {
  console.log(element);
});
let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});
let b = [1, 8, 3, 2, 5, 4, 7, 6, 9, 8, 8];
b.sort(function(a, b) { return a - b; });
b.forEach(function(number) {
  console.log(number);
});
