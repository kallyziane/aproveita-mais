
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.card-reaproveita, .numero', {
    duration: 1000,
    rotate: { x: 0, y: 80, z: 0 },
    scale: 0.85,
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200
  });
  //Filtro de busca
    const campoBusca = document.getElementById("buscaDicas");
    const botaoBuscar = document.getElementById("btnBuscar");
    const cards = document.querySelectorAll(".card-reaproveita");

    if (campoBusca && botaoBuscar) {
    function filtrarDicas() {
    const termo = campoBusca.value.toLowerCase().trim();
    cards.forEach(card => {
      const texto = card.textContent.toLowerCase();
      const coluna = card.closest(".col-md-6");
      if (texto.includes(termo)) {
        coluna.style.display = "block";
      } else {
        coluna.style.display = "none";
      }
    });
  }

      botaoBuscar.addEventListener("click", filtrarDicas);
      campoBusca.addEventListener("input", filtrarDicas);
}
    





