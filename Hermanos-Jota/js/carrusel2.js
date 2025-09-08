// JavaScript para el carrusel automático
let currentSlide = 0;
const totalSlides = 3; // 3 grupos de 3 Productos
let autoSlideInterval;

function updateCarousel() {
  const grid = document.getElementById('ProductoCarousel');
  const translateX = -currentSlide * 33.333; // Cada grupo ocupa 33.333%
  grid.style.transform = `translateX(${translateX}%)`;
  
  // Actualizar indicadores
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  
  updateCarousel();
  resetAutoSlide();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoSlide();
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 5000); // Cambiar cada 5 segundos
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Pausar auto-slide al hacer hover
document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.containerCarrusel');
  
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    carouselContainer.addEventListener('mouseleave', () => {
      startAutoSlide();
    });

    // Iniciar el carrusel automático
    startAutoSlide();
  }
});