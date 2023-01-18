let ratingButtons = document.querySelectorAll(".number");
let submitButton = document.querySelector(".submit-btn");
let html = document.querySelector(".rating-box");

ratingButtons.forEach(function (item) { // Como estamos usando o forEach, podemos utilizar o parâmetro "item" para representar o item atual, como se fosse uma variável
  item.addEventListener("click", function () { // Para cada item clicado, adiciona um escutador de eventos que executa uma ação
    item.classList.add("active-number"); // Adiciona o active state ao número clicado
    ratingButtons.forEach(function (item) { // Para impedir que mais de um número esteja selecionado ao mesmo tempo, o clique percorre o array novamente para remover a classe do novo número clicado, mas isso automaticamente também remove o active state dele, resultando em mudança nenhuma. Para isso precisamos adicionar o item.classList.add("active-number") novamente fora do forEach (mas dentro da função de clique). Poderíamos omitir o item.classList.add("active-number") na linha 7 deste código, mas por questões didáticas resolvi deixar, para entendermos que o active state está sendo adicionado ao clicar no item. É necessário
      item.classList.remove("active-number"); // Dessa forma estamos adicionando e removendo a classe do item clicado, o que resulta em mudança 
    });
    item.classList.add("active-number"); // Como a função acima está adicionando e removendo o active state, é necessário adicionar a classe novamente fora da função
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
