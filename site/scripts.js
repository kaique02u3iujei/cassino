let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.children.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let carouselInterval = setInterval(showNextImage, 3000);

document.querySelector('.carousel').onmouseover = () => clearInterval(carouselInterval);
document.querySelector('.carousel').onmouseout = () => carouselInterval = setInterval(showNextImage, 3000);