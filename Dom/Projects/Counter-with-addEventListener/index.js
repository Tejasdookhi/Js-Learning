document.addEventListener("DOMContentLoaded", function () {
  //let be now counter to 0
  let counter = 0;

  //containing buttons in variable

  const incre = document.getElementById("in");
  const decre = document.getElementById("dec");
  const res = document.getElementById("reset");
  const sav = document.getElementById("save");
  const loadd = document.getElementById("load");
  const msgEl = document.getElementById("message");

  //adding event listener to buttons via new varoables

  incre.addEventListener("click", increment);
  decre.addEventListener("click", decrement);
  res.addEventListener("click", reset);
  sav.addEventListener("click", save);
  loadd.addEventListener("click", load);

  //function for updating the count though different functions that will be updated
  function updatecount() {
    document.getElementById("counterValue").innerHTML = counter;
  }

  //function for showing any msg

  function showmsg(text) {
    msgEl.innerHTML = text;
    setTimeout(function () {
      msgEl.innerHTML = "";
    }, 3000);
  }

  //function for ++
  function increment() {
    counter++;
    updatecount();
  }

  //function for --
  function decrement() {
    if (counter > 0) {
      counter--;
      updatecount();
    }
  }

  //function for counter = 0
  function reset() {
    counter = 0;
    updatecount();
    showmsg("Reset!");
  }

  //function save previous value
  function save() {
    localStorage.setItem("counterValue", counter);
    showmsg("Saved!");
  }

  //function render when load if saved
  function load() {
    let saved = localStorage.getItem("counterValue");
    if (saved !== null) {
      counter = Number(saved);
      showmsg("Loaded!");
    }
    updatecount();
  }
});
