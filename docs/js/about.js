document.addEventListener('DOMContentLoaded', () => {
    // Header Hide/Reveal on Scroll
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down - hide header
            header.classList.add('header-hidden');
        } else {
            // Scroll Up - show header
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // Image Stack Functionality
    const images = [
        { id: 'image1', title: 'This is me!' },
        { id: 'image2', title: '*Click* Adding this one to the website' },
        { id: 'image3', title: 'Hi!' },
        { id: 'image4', title: 'Oh no! A shark. Click to get me out of here!' },
        { id: 'image5', title: 'Thanks for saving me from the shark!' }
    ];

    let currentImageIndex = 0;
    const imageStack = document.getElementById('imageStack');
    const imageTitle = document.getElementById('imageTitle');

    imageStack.addEventListener('click', function() {
        const currentImage = document.getElementById(images[currentImageIndex].id);
        currentImage.classList.remove('visible');
        currentImage.classList.add('hidden');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        const nextImage = document.getElementById(images[currentImageIndex].id);
        nextImage.classList.remove('hidden');
        nextImage.classList.add('visible');

        imageTitle.textContent = images[currentImageIndex].title;
    });
});
