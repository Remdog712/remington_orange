document.addEventListener('DOMContentLoaded', function() {
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

    // Easy Reader Toggle Functionality
    const easyReaderToggle = document.getElementById('easyReaderToggle');
    const resumeFrame = document.getElementById('resumeFrame');

    easyReaderToggle.addEventListener('change', function() {
        if (easyReaderToggle.checked) {
            resumeFrame.src = 'Wixmedia/RemingtonOrangeEasyReadResume.pdf'; // Replace with your easy reader document
        } else {
            resumeFrame.src = 'Wixmedia/RemingtonOrangeResume.pdf'; // Original resume document
        }
    });
});
