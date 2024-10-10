document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const li = this.closest('li');
            li.classList.toggle('active');
            // Close other dropdowns
            dropdownButtons.forEach((btn) => {
                if (btn !== this) {
                    btn.closest('li').classList.remove('active');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropdown-btn') && !e.target.closest('.dropdown-content')) {
            document.querySelectorAll('.professions li').forEach((li) => {
                li.classList.remove('active');
            });
        }
    });

    // Vertical Slider functionality
    const slider = document.querySelector('.vertical-slider');
    const slides = document.querySelectorAll('.vertical-slider .slide');
    const upButton = document.querySelector('.slider-nav.up');
    const downButton = document.querySelector('.slider-nav.down');
    let currentIndex = 0;

    function updateSliderPosition() {
        const slideHeight = slides[0].offsetHeight;
        slider.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
    }

    function showNextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        }
    }

    function showPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    }

    downButton.addEventListener('click', showNextSlide);
    upButton.addEventListener('click', showPrevSlide);

    // Lightbox functionality with Title and Description
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('#lightbox .close');
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

    lightboxTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxTitle.textContent = this.getAttribute('data-title') || '';
            lightboxDescription.textContent = this.getAttribute('data-description') || '';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Recalculate slider position on window resize
    window.addEventListener('resize', updateSliderPosition);

    // Initialize slider position
    updateSliderPosition();
});
