// Combined JavaScript for header hide/reveal, background image change on scroll, lightbox functionality, and thumbnail hover

document.addEventListener('DOMContentLoaded', function() {
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

   // Background Image Change on Scroll
const sections = document.querySelectorAll('.essay-section');
const backgroundDiv = document.querySelector('.background-image');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust as needed
};

const observer = new IntersectionObserver(callback, options);

sections.forEach(section => {
    observer.observe(section);
});

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bgImage = entry.target.getAttribute('data-background-image');
            backgroundDiv.style.backgroundImage = `url(${bgImage})`;
        }
    });
}

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('#lightbox .close');
    const galleryImages = document.querySelectorAll('.gallery-item img, .image-group img, .main-image img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxDescription.textContent = this.alt || '';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Thumbnail Hover Functionality
    const essaySections = document.querySelectorAll('.essay-section');

    essaySections.forEach(section => {
        const mainImage = section.querySelector('.main-image img');
        const thumbnails = section.querySelectorAll('.thumbnail-group img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('mouseover', function() {
                // Update main image src and alt
                mainImage.src = this.src;
                mainImage.alt = this.alt;

                // Update selected thumbnail
                thumbnails.forEach(thumb => thumb.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        // Optional: click on main image to open lightbox
        mainImage.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxDescription.textContent = this.alt || '';
        });
    });
});
