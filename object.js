let obj1 = {
  key1: "Hello!",
  key2: 123,
  key3: ['Hello!', 'World'],
  anykey4: function () {
    console.log("from obj1->anykey4");
  }
};
console.log("obj1", obj1);
console.log("obj1->key2", obj1.key2);
console.log("obj1->anykey4", obj1.anykey4);