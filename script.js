document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Form validation
    const formButton = document.querySelector('.hero-buttons button');
    const emailInput = document.querySelector('.hero-buttons input');
    formButton.addEventListener('click', function () {
        const emailValue = emailInput.value;
        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // FAQ accordion
    const faqBoxes = document.querySelectorAll('.faqbox');
    faqBoxes.forEach(faqBox => {
        faqBox.addEventListener('click', function () {
            this.classList.toggle('active');
            const svg = this.querySelector('svg');
            svg.classList.toggle('rotated');
        });
    });
});
