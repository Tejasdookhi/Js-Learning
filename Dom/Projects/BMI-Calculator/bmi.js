const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputHeight = parseInt(document.querySelector("#height").value);
  const inputWeight = parseInt(document.querySelector("#weight").value);
  const resultcal = document.querySelector("#result");
  const underweight = document.getElementById("under");
  const normalweight = document.getElementById("normal");
  const overweight = document.getElementById("over");

  if (inputHeight === "" || inputHeight < 0 || isNaN(inputHeight)) {
    resultcal.innerHTML = `Please Give a Valid Height ${inputHeight}`;
  } else if (inputWeight === "" || inputWeight < 0 || isNaN(inputWeight)) {
    resultcal.innerHTML = `Please Give a Valid Weight ${inputWeight}`;
  } else {
    const bmi = (inputWeight / ((inputHeight * inputHeight) / 10000)).toFixed(
      2,
    );
    resultcal.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      resultcal.innerHTML = `BMI : ${bmi}  (Under weight)`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      resultcal.innerHTML =`BMI : ${bmi}  (Normal weight)`;
    } else {
      resultcal.innerHTML = `BMI : ${bmi} (Over weight)`;
    }
  }
});
