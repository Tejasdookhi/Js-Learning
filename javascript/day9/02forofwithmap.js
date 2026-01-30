//map()
const map = new Map();

map.set("IND", "India");
map.set("USA", "United States Of America");
map.set("NZ", "Newzealand");
map.set("Fr", "France");

for (const [key, value] of map) {
  console.log(key + " :- " + value); //IND :- India  USA :- United States Of America like this all 4 will print[key value] in for of loop
}
