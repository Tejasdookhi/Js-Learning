const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputHeight = parseInt(document.querySelector("#height").value);
  const inputWeight = parseInt(document.querySelector("#weight").value);
  const resultcal = document.querySelector("#result");

  if (inputHeight === "" || inputHeight < 0 || isNaN(inputHeight)) {
    resultcal.innerHTML = `Please Give a Valid Height ${inputHeight}`;
  } else if (inputWeight === "" || inputWeight < 0 || isNaN(inputWeight)) {
    resultcal.innerHTML = `Please Give a Valid Weight ${inputWeight}`;
  } else {
    const bmi = (inputWeight / ((inputHeight * inputHeight) / 10000)).toFixed(
      2,
    );
    resultcal.innerHTML = `<span>${bmi}</span>`;
  }
});
