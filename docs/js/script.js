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

    // Lightbox Variables
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('#lightbox .close');

    // Function to open the lightbox
    function openLightbox(imgSrc, title, description) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title + (description ? ` - ${description}` : '');
        lightbox.style.display = 'flex';
    }

    // Close Lightbox when clicking on the close button
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // --- Image Randomization Starts Here ---

    /**
     * Shuffles an array in place using the Fisher-Yates algorithm.
     * @param {Array} array - The array to shuffle.
     * @returns {Array} The shuffled array.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Swap elements array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Select the image container
    const imageContainer = document.getElementById('image-collage');

    if (imageContainer) {
        // Select all image items within the container
        const imageItems = Array.from(imageContainer.children);

        // Shuffle the image items
        const shuffledItems = shuffleArray(imageItems);

        // Re-append shuffled items to the container without removing them from the DOM
        shuffledItems.forEach(item => imageContainer.appendChild(item));
    } else {
        console.warn('Image container with id "#image-collage" not found.');
    }

    // --- Image Randomization Ends Here ---

    // Attach click event to all images for the lightbox
    const imageElements = document.querySelectorAll('.image-item img');
    imageElements.forEach(img => {
        img.addEventListener('click', () => {
            const imgSrc = img.src;
            const title = img.getAttribute('data-title') || '';
            const description = img.getAttribute('data-description') || '';
            openLightbox(imgSrc, title, description);
        });
    });

    // Filter Functionality
    const filterButton = document.querySelector('.filter-button');
    const filterDropdown = document.querySelector('.filter-dropdown');
    const filterOptions = document.querySelectorAll('.filter-option');

    // Toggle filter menu on button click
    filterButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling up
        filterDropdown.classList.toggle('active');
    });

    // Close filter menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!filterDropdown.contains(e.target)) {
            filterDropdown.classList.remove('active');
        }
    });

    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'active' class from all options
            filterOptions.forEach(opt => opt.classList.remove('active'));
            // Add 'active' class to clicked option
            option.classList.add('active');

            const filterValue = option.getAttribute('data-filter');
            filterImages(filterValue);

            // Close the dropdown menu
            filterDropdown.classList.remove('active');
        });
    });

    /**
     * Filters images based on the selected category.
     * @param {string} category - The category to filter by.
     */
    function filterImages(category) {
        const allImageItems = document.querySelectorAll('.image-item');
        allImageItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = ''; // Reset to default display
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Initialize filter to show all items
    filterImages('all');
});
