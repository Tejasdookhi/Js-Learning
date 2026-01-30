//for(in)loop on objects prefer

let obj = {
  js: "javascript",
  py: "python",
  cpp: "C++",
};
for (const myobj in obj) {
  //console.log(myobj);  ** //it will only print key like js py cpp for value
  //console.log(obj[myobj]); ** //javascript python c++ for best key value pair
  console.log(`${myobj} is key of value :- ${obj[myobj]} `); //exact key and value
}

//another simple direct

let products = {
  1: "Mouse",
  2: "Keyboard",
  3: "Laptop",
};
for (const prods in products) {
  console.log(prods + " :- " + products[prods]);
}

//can we print array ?

let arrays = ["one", "two", "three", "four"];
for (const arr in arrays) {
  //console.log(arr); // 0 1 2 3 its are key
  console.log(arrays[arr]); // now corrected prints onne two three and so on
}
