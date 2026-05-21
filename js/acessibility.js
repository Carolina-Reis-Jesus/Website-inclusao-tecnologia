// ===================================
// ADICIONAR WIDGETS DE ACESSIBILIDADE
// ===================================
(function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "SEU_ID_AQUI");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);
  })(document)


document.addEventListener("DOMContentLoaded", function () {
  // Criar estrutura HTML
  const container = document.createElement("div");
  container.setAttribute("vw", "");
  container.classList.add("enabled");

  container.innerHTML = `
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  `;

  document.body.appendChild(container);

  // Carregar script do VLibras
  const script = document.createElement("script");
  script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";

  script.onload = function () {
    new window.VLibras.Widget("https://vlibras.gov.br/app");
  };

  document.body.appendChild(script);
});


// ================
// SWITCH DARK MODE
// ================

const toggle = document.getElementById("dark-mode");

toggle.addEventListener("change", () => {
  if (toggle.checked){
    document.body.setAttribute("data-theme", "dark");
  }
  else{
    document.body.setAttribute("data-theme", "default");
  }
})



const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

document.querySelector('.next').onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};
