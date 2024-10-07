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
        'WixMedia/Renders/OceanRender.png',
        'WixMedia/Renders/OrangeO_Cereal.png',
        'WixMedia/Renders/LivingRoomProgress.png',
        'WixMedia/Renders/ForestReal.png',
        'WixMedia/Renders/WoodenTrain.png',
        'WixMedia/Renders/FactoBot1.png',
        'WixMedia/Renders/DeerReal.png',
        'WixMedia/Renders/SockPuppetShow.png',
        'WixMedia/Renders/justSomeRandomPlants2.png',
        'WixMedia/Renders/plains_render.png',
        'WixMedia/Renders/ProceduralCrowd.png',
        'WixMedia/Renders/RobotRender_Eevee.jpg',
        'WixMedia/Renders/rorange_Frame1_RawTextures.png',
        'WixMedia/Renders/rorange_LowPoly3.png',
        'WixMedia/Renders/SimpleCouch.png',
        'WixMedia/Renders/Alien_Takeover_ProcCity2.png',
        'WixMedia/Renders/Blender_First_Donut_Eevee.png',
        'WixMedia/Renders/BlenderBulletRender2.png',
        'WixMedia/Renders/CanRender2.png',
        'WixMedia/Renders/Cave.png',
        'WixMedia/Renders/cave_render.png',
        'WixMedia/Renders/cloth1.png',
        'WixMedia/Renders/coffeesimrender.png',
        'WixMedia/Renders/couch7.png',
        'WixMedia/Renders/FactoBot3.png',
        'WixMedia/Renders/FactoryBotProgress.png',
        'WixMedia/Renders/FairmountLivingRoomFinsih6.png',
        'WixMedia/Renders/FairMountLivingRoomProgress1.png',
        'WixMedia/Renders/First_Rig.png',
        'WixMedia/Renders/ForestAlien4.png',
        'WixMedia/Renders/MrSpit.png',
        'WixMedia/Renders/mutant.png',
        'WixMedia/Renders/Mutant3.png'
    ];

    // Common Variables
    const photosPerPage = 4;

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

    // **Close Lightbox when clicking outside the image**
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
            lightbox.style.display = 'block';
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
