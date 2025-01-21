const carousels = [
    { id: 'carousel1', index: 0, interval: null },
    { id: 'carousel2', index: 0, interval: null },
  ];
  
  const updateCarousel = (carouselId, index) => {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.children.length;
    const validIndex = (index + totalImages) % totalImages;
    images.style.transform = `translateX(-${validIndex * 100}%)`;
    return validIndex;
  };
  
  const startAutoplay = (carousel) => {
    const { id } = carousel;
    carousel.interval = setInterval(() => {
      carousel.index = updateCarousel(id, carousel.index + 1);
    }, 3000);
  };
  
  const stopAutoplay = (carousel) => {
    clearInterval(carousel.interval);
  };
  
  carousels.forEach((carousel) => {
    const { id } = carousel;
    const carouselElement = document.getElementById(id);
  
    
    carouselElement.querySelector('.prev').addEventListener('click', () => {
      stopAutoplay(carousel);
      carousel.index = updateCarousel(id, carousel.index - 1);
      startAutoplay(carousel);
    });
  
    
    carouselElement.querySelector('.next').addEventListener('click', () => {
      stopAutoplay(carousel);
      carousel.index = updateCarousel(id, carousel.index + 1);
      startAutoplay(carousel);
    });
  
    
    startAutoplay(carousel);
  });
  