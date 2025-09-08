        const carousel = document.querySelector('.carousel');
        let currentIndex = 0;
        const totalImages = 3;
        const slideInterval = 3000; // 3 seg
        let slideTimer;
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        slideTimer = setInterval(nextSlide, slideInterval);
    
        const aboutR = document.querySelector('.aboutR');
        aboutR.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
        });
        aboutR.addEventListener('mouseleave', () => {
            slideTimer = setInterval(nextSlide, slideInterval);
        });