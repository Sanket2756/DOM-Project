let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } 
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } 
  else {
    height = height / 100; // convert cm to meter
    let bmi = (weight / (height * height)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi}`;
  }
});