const ratingPoints = document.querySelectorAll(".rating-point");

for (const point of ratingPoints) {
  point.addEventListener("click", handleBtn)
}

function handleBtn() {
  ratingPoints.forEach(btn => btn.classList.remove("active"));

  this.classList.add("active");

  lastTxt = this.innerText;
}

const main = document.querySelector(".card-main");
const completed = document.querySelector(".card-completed");
const ratingText = document.querySelector(".card-completed").children[1];

submitBtn.addEventListener("click", function() {
  completed.style.display = "block"
  main.style.display = "none"
  ratingText.innerHTML = `You selected ${lastTxt} out of 5`

})

