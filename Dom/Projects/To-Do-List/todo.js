const inputs = document.getElementById("int");

const text = document.querySelector(".text");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Your Task");
  } else {
    const newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fas fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove() {
      newEle.remove();
    }
  }
}
