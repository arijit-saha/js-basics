const arr = ["ABC", "DEF", 123];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log("element from 'for' loop =>", element);
}

arr.forEach(function (elem) {
  console.log("element from 'forEach' loop =>", elem);
})