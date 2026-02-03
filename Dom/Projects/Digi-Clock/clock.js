const timer = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  timer.innerHTML = date.toLocaleTimeString();
}, 1000);
