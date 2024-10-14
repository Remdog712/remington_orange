document.addEventListener('DOMContentLoaded', () => {
    // Photography Gallery
    const photoImages = [
        'WixMedia/Photography/IMG_3287.JPG',
        'WixMedia/Photography/IMG_3340.JPG',
        'WixMedia/Photography/IMG_0360.JPG',
        'WixMedia/Photography/IMG_0373.JPG',
        'WixMedia/Photography/IMG_0395.JPG',
        'WixMedia/Photography/IMG_0425.JPG',
        'WixMedia/Photography/IMG_2111.JPG',
        'WixMedia/Photography/IMG_1944.JPG',
        'WixMedia/Photography/IMG_2120.JPG',
        'WixMedia/Photography/IMG_2135.JPG',
        'WixMedia/Photography/IMG_2138.JPG',
        'WixMedia/Photography/IMG_2707.JPG',
        'WixMedia/Photography/IMG_2836.JPG',
        'WixMedia/Photography/IMG_2931.JPG',
        'WixMedia/Photography/IMG_3101.JPG',
        'WixMedia/Photography/IMG_3111.JPG',
        'WixMedia/Photography/IMG_3126.JPG',
        'WixMedia/Photography/IMG_3139.JPG',
        'WixMedia/Photography/IMG_3160.JPG',
        'WixMedia/Photography/IMG_3175.JPG',
        'WixMedia/Photography/IMG_3623.JPG',
        'WixMedia/Photography/IMG_3624.JPG',
        'WixMedia/Photography/IMG_3664.JPG',
        'WixMedia/Photography/IMG_3696.JPG',
        'WixMedia/Photography/IMG_9459.JPG',
        'WixMedia/Photography/IMG_041212321.jpg',
        'WixMedia/Photography/IMG_3193.JPG',
        'WixMedia/Photography/IMG_3213.JPG'
    ];

    // 3D Works Gallery
    const renderImages = [
        'WixMedia/Renders/OceanRender.jpg',
        'WixMedia/Renders/OrangeO_Cereal.jpg',
        'WixMedia/Renders/LivingRoomProgress.jpg',
        'WixMedia/Renders/ForestReal.jpg',
        'WixMedia/Renders/WoodenTrain.jpg',
        'WixMedia/Renders/FactoBot1.jpg',
        'WixMedia/Renders/DeerReal.jpg',
        'WixMedia/Renders/SockPuppetShow.jpg',
        'WixMedia/Renders/justSomeRandomPlants2.jpg',
        'WixMedia/Renders/plains_render.jpg',
        'WixMedia/Renders/ProceduralCrowd.jpg',
        'WixMedia/Renders/RobotRender_Eevee.jpg',
        'WixMedia/Renders/rorange_Frame1_RawTextures.jpg',
        'WixMedia/Renders/rorange_LowPoly3.jpg',
        'WixMedia/Renders/SimpleCouch.jpg',
        'WixMedia/Renders/Alien_Takeover_ProcCity2.jpg',
        'WixMedia/Renders/Blender_First_Donut_Eevee.jpg',
        'WixMedia/Renders/BlenderBulletRender2.jpg',
        'WixMedia/Renders/CanRender2.jpg',
        'WixMedia/Renders/Cave.jpg',
        'WixMedia/Renders/cave_render.jpg',
        'WixMedia/Renders/cloth1.jpg',
        'WixMedia/Renders/coffeesimrender.jpg',
        'WixMedia/Renders/couch7.jpg',
        'WixMedia/Renders/FactoBot3.jpg',
        'WixMedia/Renders/FactoryBotProgress.jpg',
        'WixMedia/Renders/FairmountLivingRoomFinsih6.jpg',
        'WixMedia/Renders/FairMountLivingRoomProgress1.jpg',
        'WixMedia/Renders/First_Rig.jpg',
        'WixMedia/Renders/ForestAlien4.jpg',
        'WixMedia/Renders/MrSpit.jpg',
        'WixMedia/Renders/mutant.jpg',
        'WixMedia/Renders/Mutant3.jpg'
    ];

// Common Variables
const photosPerPage = 8; // Adjusted to show more thumbnails per page

// Initialize Galleries
initializeGallery('photoGallery', photoImages, 'prevBtn', 'nextBtn');
initializeGallery('renderGallery', renderImages, 'prevRenderBtn', 'nextRenderBtn');

// Lightbox Variables
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('#lightbox .close');

// Close Lightbox when clicking on the close button
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Function to Initialize a Gallery
function initializeGallery(galleryId, imagesArray, prevBtnId, nextBtnId) {
    const gallery = document.getElementById(galleryId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    let currentIndex = 0;

    function loadImages(startIndex) {
        gallery.innerHTML = ''; // Clear current images
        for (let i = startIndex; i < startIndex + photosPerPage && i < imagesArray.length; i++) {
            const img = document.createElement('img');
            img.src = imagesArray[i];
            img.alt = `Image ${i + 1}`;
            img.loading = 'lazy';
            img.addEventListener('click', () => openLightbox(img.src));
            gallery.appendChild(img);
        }
        updateNavButtons();
    }

    function updateNavButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + photosPerPage >= imagesArray.length;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= photosPerPage;
            loadImages(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex + photosPerPage < imagesArray.length) {
            currentIndex += photosPerPage;
            loadImages(currentIndex);
        }
    });

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'flex';
    }

    // Load the first set of images
    loadImages(currentIndex);
}

// Filter Buttons Functionality
const filterButtons = document.querySelectorAll('.filter-buttons .button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        filterPortfolio(filterValue);
    });
});

function filterPortfolio(category) {
    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || category === itemCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize filter to show all items
filterPortfolio('all');
});
