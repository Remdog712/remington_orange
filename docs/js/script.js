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

    // Images stored in JavaScript
    const images = [
        { src: 'WixMedia/Photography/IMG_3287.JPG', title: 'Image 1', description: 'A serene landscape', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_3287.JPG', title: 'Image 2', description: 'A serene landscape', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_3287.JPG', title: 'Image 3', description: 'A serene landscape', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_0425.JPG', title: 'Image 4', description: 'A quiet lake', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_3623.JPG', title: 'Image 5', description: 'Nature in bloom', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_3160.JPG', title: 'Image 6', description: 'A misty forest', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_1944.JPG', title: 'Image 7', description: 'An abandoned city', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_0360.JPG', title: 'Image 8', description: 'Golden hour', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_3193.JPG', title: 'Image 9', description: 'A peaceful stream', category: 'photography' },
        { src: 'WixMedia/Photography/IMG_2707.JPG', title: 'Image 10', description: 'A vibrant flower field', category: 'photography' }
    ];

// Randomize images
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const shuffledImages = shuffle(images);

// Load images into the collage
const imageCollage = document.getElementById('image-collage');
const imagesToLoad = [];

shuffledImages.forEach(image => {
    console.log(image.src);
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');
    imageItem.setAttribute('data-category', image.category);

    const img = document.createElement('img');
    img.dataset.src = image.src; // Use data-src for lazy loading
    img.alt = image.title;
    img.setAttribute('data-title', image.title);
    img.setAttribute('data-description', image.description);

    // Error handling
    img.addEventListener('error', () => {
        console.error(`Failed to load image: ${img.dataset.src}`);
    });

    // Click event for lightbox
    img.addEventListener('click', () => {
        openLightbox(img.dataset.src, image.title, image.description);
    });

    imageItem.appendChild(img);
    imageCollage.appendChild(imageItem);

    imagesToLoad.push(img);
});

// Implement Intersection Observer
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    imagesToLoad.forEach(img => {
        imageObserver.observe(img);
    });
} else {
    // Fallback for older browsers
    imagesToLoad.forEach(img => {
        img.src = img.dataset.src;
    });
}
    });
    // Lightbox Variables
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('#lightbox .close');

    // Open Lightbox Function
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

    function filterImages(category) {
        const allImageItems = document.querySelectorAll('.image-item');
        allImageItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Initialize filter to show all items
    filterImages('all');
});
