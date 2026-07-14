// ============================================
// AOS INIT
// ============================================
AOS.init({
    duration: 800,
    once: true,
    offset: 50,
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE MENU
// ============================================
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

// ============================================
// FAQ TOGGLE
// ============================================
function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('open');
    });
    if (!isActive) {
        element.classList.add('active');
        element.nextElementSibling.classList.add('open');
    }
}

// ============================================
// SCROLL SPY
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

console.log('🌿 Eduwisata Kampung Kambing Lestari Jaya - Desa Pecalongan');
console.log('✨ Website estetik siap digunakan!');