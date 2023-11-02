let add = (a, b) => a + b;
console.log("Add 1 =>", add(10, 20));
console.log("Add 2 =>", add(20, 30));

add = (a, b, c) => a + b + c;
console.log("Add 3 =>", add(10, 20.2, 30));
console.log("Add 4 =>", add(20, "abc", 40));

add = (a, b, c, d) => {
  let var1 = a + b + c + d;
  return var1;
}
console.log("Add 5 =>", add(10, 20.2, 30, 40));
console.log("Add 6 =>", add(20, "abc", 40, 50));