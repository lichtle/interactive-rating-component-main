let ratingButtons = document.querySelectorAll(".number");
let submitButton = document.querySelector(".submit-btn");
let html = document.querySelector(".rating-box");

ratingButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("active-number"); // Adiciona o active state ao clicar em um botão
    ratingButtons.forEach(function (item) {
      // Ao clicar novamente, percorre cada botão novamente
      item.classList.remove("active-number"); // Removo a classe quando o botão é clicado novamente
    });
    item.classList.add("active-number"); // Como a função acima está adicionando e removendo o active state, é necessário adicioná-lo novamente fora da função
  });
});

submitButton.addEventListener("click", function () {
  html.innerHTML = `<img class="mobile-phone-icon" src="src/images/illustration-thank-you.svg" alt="Mobile phone icon" />
        <span class="x-out-of-5-rate">You selected out of 5</span>
        <h1 class="thank-you-title">Thank you!</h1>
        <p class="thank-you-paragraph">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>`;

  html.classList.remove("rating-box");
  html.classList.add("thank-you-message-box");
});
