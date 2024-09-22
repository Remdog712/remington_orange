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

    // Gallery navigation functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSliderPosition() {
        if (slides.length === 0) return;
        const slideWidth = slides[0].offsetWidth;
        const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
        const totalSlideWidth = slideWidth + slideMarginRight;
        slider.style.transform = `translateX(-${currentIndex * totalSlideWidth}px)`;
    }

    function showNextSlide() {
        if (slides.length === 0) return;
        const slideWidth = slides[0].offsetWidth;
        const slideMarginRight = parseInt(getComputedStyle(slides[0]).marginRight);
        const totalSlideWidth = slideWidth + slideMarginRight;
        const slidesVisible = Math.floor(window.innerWidth / totalSlideWidth);
        if (currentIndex < slides.length - slidesVisible) {
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

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

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
            lightboxTitle.textContent = this.getAttribute('data-title');
            lightboxDescription.textContent = this.getAttribute('data-description');
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

    // Initialize slider position
    updateSliderPosition();

    // Recalculate slider position on window resize
    window.addEventListener('resize', updateSliderPosition);
});
