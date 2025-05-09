function navegarCards(direcao) {
  const faixa = document.getElementById("carrossel-cards");
  faixa.scrollBy({
    left: 320 * direcao,
    behavior: "smooth"
  });
}

function navegarVideos(direcao) {
  const faixa = document.getElementById("carrossel-videos");
  faixa.scrollBy({
    left: 320 * direcao,
    behavior: "smooth"
  });
}
