//declare a empty count that stores a value
let count = 10;

// Load the counter when the page open
load()
updatecount();

//functions for updating count

function updatecount() {
  document.getElementById('counterValue').innerHTML = count;
}

//functions for increasing count to + 1

function increment() {
  count++;
  updatecount();
}
//functions for decreasing  count to - 1
function decrement() {
    if(count > 0){
  count--;
  updatecount()};
}
//functions for reset count = 0
function reset() {
  count = 10;
  updatecount();
}
//functions for save
function save() {
  localStorage.setItem("count" , count);
}
//functions for load
function load() {
let saved = localStorage.getItem("count");
if(saved !== null){
    count = Number(saved);
  }

}
