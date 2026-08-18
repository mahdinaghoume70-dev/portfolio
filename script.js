// ===== LOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1200);
});

// ===== PARTICULES =====
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particlesContainer.appendChild(particle);
    }
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===== TYPING EFFECT =====
const words = ['Développeur Full Stack', 'Étudiant BTS DD', 'Créatif & Passionné'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause à la fin du mot
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause avant le prochain mot
    }

    setTimeout(type, typeSpeed);
}

// Démarrer le typing après le loader
setTimeout(() => {
    type();
}, 1500);

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ===== PROGRESS BARS (Compétences) =====
const progressBars = document.querySelectorAll('.competence-progress');
if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                if (width) {
                    setTimeout(() => {
                        entry.target.style.width = width + '%';
                    }, 200);
                }
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));
}

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
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
}

// ===== TECH STACK HOVER EFFECT =====
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-6px) scale(1.15)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SMOOTH SCROLL POUR TOUS LES LIENS ANCRE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// ===== WHATSAPP DIRECT CHAT =====
const whatsappBtn = document.getElementById('whatsappBtn');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // ⚠️ REMPLACE PAR TON VRAI NUMÉRO (format international sans +)
        const phone = '212689329055';  
        const message = 'Bonjour Mahdi, je vous contacte depuis votre portfolio.';
        
        // Détection mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        let url;
        if (isMobile) {
            // 📱 Mobile : ouvre directement l'app WhatsApp
            url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        } else {
            // 💻 PC : ouvre directement WhatsApp Web (SANS page intermédiaire)
            url = `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        }
        
        window.open(url, '_blank');
    });
    
    // Cacher le badge au clic
    const badge = whatsappBtn.querySelector('.whatsapp-badge');
    if (badge) {
        whatsappBtn.addEventListener('click', () => {
            badge.style.display = 'none';
        });
    }
}
// كود لإخفاء شاشة التحميل بعد 2 ثواني كأقصى حد
setTimeout(() => {
    const loader = document.querySelector('.loader') || document.querySelector('#preloader'); // استخدم الكلاس أو ID ديال الـ loader اللي عندك
    if (loader) {
        loader.style.display = 'none';
    }
}, 2000);