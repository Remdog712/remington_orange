document.addEventListener('DOMContentLoaded', function() {
    const galleryWrappers = document.querySelectorAll('.gallery-wrapper');
    const sliders = document.querySelectorAll('.slider');
    const sliderHandles = document.querySelectorAll('.slider-handle');

    galleryWrappers.forEach((galleryWrapper, index) => {
        const slider = sliders[index];
        const sliderHandle = sliderHandles[index];

        let isDraggingSlider = false;
        let sliderStartX = 0;
        let sliderHandleStartX = 0;
        const galleryScrollWidth = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;

        // Sync gallery scroll with slider handle movement
        galleryWrapper.addEventListener('scroll', () => {
            const scrollPercentage = galleryWrapper.scrollLeft / galleryScrollWidth;
            const sliderHandleMaxLeft = slider.offsetWidth - sliderHandle.offsetWidth;
            sliderHandle.style.left = `${scrollPercentage * sliderHandleMaxLeft}px`;
        });

        // Handle dragging the slider
        sliderHandle.addEventListener('mousedown', (e) => {
            isDraggingSlider = true;
            sliderStartX = e.pageX;
            sliderHandleStartX = parseInt(sliderHandle.style.left || '0');
            document.body.style.cursor = 'grabbing';
        });

        document.addEventListener('mouseup', () => {
            isDraggingSlider = false;
            document.body.style.cursor = 'default';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDraggingSlider) return;
            const sliderMoveX = e.pageX - sliderStartX;
            const sliderHandleMaxLeft = slider.offsetWidth - sliderHandle.offsetWidth;
            let newLeft = sliderHandleStartX + sliderMoveX;
            newLeft = Math.max(0, Math.min(newLeft, sliderHandleMaxLeft)); // Bound the slider handle
            sliderHandle.style.left = `${newLeft}px`;

            // Scroll the gallery based on the slider handle position
            const scrollPercentage = newLeft / sliderHandleMaxLeft;
            galleryWrapper.scrollLeft = scrollPercentage * galleryScrollWidth;
        });

        // Lightbox functionality
        const galleryImages = galleryWrapper.querySelectorAll('img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.querySelector('#lightbox .close');

        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                // Prevent the click if the user is dragging the slider
                if (isDraggingSlider) return;
                
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && e.target !== lightboxClose) {
                lightbox.style.display = 'none';
            }
        });
    });
});
