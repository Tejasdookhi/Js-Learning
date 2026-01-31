//reduce()
const myNum = [1, 2, 3, 4, 5];

const newMuns = myNum.reduce((acc, items) => {
  console.log(`acc is ${acc} and value is ${items}`);
  return acc + items;
}, 0);//15
console.log(newMuns);

const shoppingCart = [
  { course: "js", price: 1500 },
  { course: "java", price: 2500 },
  { course: "Data science", price: 3500 },
];

const priceToPay =  shoppingCart.reduce((acc , item) => acc + item.price ,0)
console.log(priceToPay);//7500


