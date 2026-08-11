// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Book button click handlers
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const roomName = this.parentElement.querySelector('h3').textContent;
        alert(`Thank you for your interest in our ${roomName}!\n\nPlease contact us to complete your booking.\nPhone: +1 (555) 123-4567`);
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    alert(`Thank you ${name}! We've received your message and will get back to you soon.`);
    this.reset();
});

// Add scroll animation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('Green Land Hotel Website Loaded!');
