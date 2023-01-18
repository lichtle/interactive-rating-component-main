let ratingButtons = document.querySelectorAll(".number");
let submitButton = document.querySelector(".submit-btn");
let html = document.querySelector(".rating-box");

ratingButtons.forEach(function (item) {
  // Como estamos usando o forEach, podemos utilizar o parâmetro "item" para representar o item atual, como se fosse uma variável
  item.addEventListener("click", function () {
    // Para cada item clicado, adiciona um escutador de eventos que executa uma ação
    ratingButtons.forEach(function (item) {
      // Para impedir que mais de um número esteja selecionado ao mesmo tempo, é necessário fazer uma verificação antes (a qual ocorre em cada clique), que analisa se já existe algum item selecionado. Para realizá-la percorremos novamente o array em busca do item (se houver) que possui um active state (ou seja, o item selecionado) e o removemos
      item.classList.remove("active-number");
    });
    item.classList.add("active-number"); // Após a verificação ser concluída (saída do loop), adicionamos o active state ao número clicado
  });
});

submitButton.addEventListener("click", function () {
  let selectedNumber = document.querySelector(".active-number").innerHTML;

  html.innerHTML = `<img class="mobile-phone-icon" src="src/images/illustration-thank-you.svg" alt="Mobile phone icon" />
        <span class="x-out-of-5-rate">You selected ${selectedNumber} out of 5</span>
        <h1 class="thank-you-title">Thank you!</h1>
        <p class="thank-you-paragraph">
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>`;

  html.classList.remove("rating-box");
  html.classList.add("thank-you-message-box");
});
