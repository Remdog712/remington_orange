// contact.js

document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.querySelector('.contact-item a[href^="mailto:"]');
    const phoneLink = document.querySelector('.contact-item a[href^="tel:"]');

    emailLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        navigator.clipboard.writeText(emailLink.textContent).then(() => {
            alert('Email copied to clipboard!');
        });
    });

    phoneLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        navigator.clipboard.writeText(phoneLink.textContent).then(() => {
            alert('Phone number copied to clipboard!');
        });
    });
});
