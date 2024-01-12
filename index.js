const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<h5>❌ Please provide positive height value.</h5>
    `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<h5>❌ Please provide positive weight value.</h5>
    `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `BMI = <span>${bmi}</span><span>(Normal)</span>`;
    } else if (bmi <= 18.6) {
      results.innerHTML = `BMI = <span>${bmi}</span><span>(Under Weight)</span>`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `BMI = <span>${bmi}</span><span>(OverWeight)</span>`;
    }

    // results.innerHTML = `BMI = <span>${bmi}</span>`;
  }
});
