function doSomething(callbackAny) {
  callbackAny("Hello! world.");
}

doSomething(msg => {
  console.log(msg);
});

// It's just a explanation for arrow function
// function anyName(message) {
// console.log(message);
// }