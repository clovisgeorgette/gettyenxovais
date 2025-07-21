
/*
    //efeito para trocar imagem.
    function trocarImagem() {
    document.getElementById("imagem").src="image-produto/edredon.jpeg";
    }
    function restaurarImagem() {
    document.getElementById("imagem").src="image-produto/colcha-solteiro.jpg";
    }

    //efeito para trocar imagem.
    function trocarImagema() {
    document.getElementById("imagema").src="image-produto/image2p.jpg"; //imagem principal
    }
    function restaurarImagema() {
    document.getElementById("imagema").src="image-produto/image2s.jpg"; //imagem secundaria
    }

    function trocarImage1() {
    document.getElementById("image").src="image-produto/image3p.jpg"; //imagem principal
    }
    function restaurarImage1() {
    document.getElementById("image1").src="image-produto/image3s.jpg"; //imagem secundaria
    }*/

//função para a sessao de produtos para mostrar a imagem ao passar o mouse
//inicio da função
function mostrarImagem(elemento, src) {
  const imagem = document.getElementById("imagem-extra");
  imagem.src = src;
  imagem.style.display = "block";

  document.onmousemove = function (e) {
    imagem.style.left = e.pageX + -100 + "px";
    imagem.style.top = e.pageY + 20 + "px";
  };
}

function esconderImagem() {
  document.getElementById("imagem-extra").style.display = "none";
  document.onmousemove = null;
}
//fim da função mostrar imagem


//carrosel da imagem principal background
//inicio da função
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('show'));
  slides[index].classList.add('show');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Inicia o carrossel
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Troca a cada 3 segundos
//fim da função

