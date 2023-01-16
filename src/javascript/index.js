let ratingButtons = document.querySelectorAll(".number");
let submitButton = document.querySelector(".submit-btn");

ratingButtons.forEach(function (item, indice) {
  item.addEventListener("click", function () {
    item.className = "active-number";
  });
});

submitButton.addEventListener("click", function () {
  document.body.innerHTML = ""
});
