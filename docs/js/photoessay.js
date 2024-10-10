// JavaScript for changing background image as you scroll and lightbox functionality

document.addEventListener('DOMContentLoaded', function() {
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

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('#lightbox .close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxDescription.textContent = this.alt;
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

    // Thumbnail hover functionality
    const essaySections = document.querySelectorAll('.essay-section');

    essaySections.forEach(section => {
        const mainImage = section.querySelector('.main-image img');
        const thumbnails = section.querySelectorAll('.thumbnail-group .thumbnail');

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
            lightboxDescription.textContent = this.alt;
        });
    });
});
