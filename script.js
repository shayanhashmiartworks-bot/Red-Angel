// ============================================
// RED ANGEL - WEBSITE SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initParticles();
    initNavScroll();
    initSmoothScroll();
    initMobileMenu();
    initScrollAnimations();
    initScreenshotTabs();
});

// Enhanced Loading Screen
function initLoader() {
    const loader = document.getElementById('loadingScreen');
    const statusText = document.getElementById('loadingStatus');
    
    const statuses = [
        'INITIALIZING SYSTEMS',
        'LOADING NEURAL CORES',
        'CALIBRATING AI ENGINE',
        'ESTABLISHING SECURE CONNECTION',
        'DECRYPTING PROTOCOLS',
        'READY'
    ];
    
    let statusIndex = 0;
    
    // Cycle through status messages
    const statusInterval = setInterval(() => {
        statusIndex++;
        if (statusIndex < statuses.length && statusText) {
            statusText.textContent = statuses[statusIndex];
        }
    }, 450);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearInterval(statusInterval);
            if (statusText) statusText.textContent = 'LAUNCHING';
            
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
        }, 2500);
    });
    
    // Fallback
    setTimeout(() => {
        clearInterval(statusInterval);
        loader.classList.add('hidden');
    }, 4500);
}

// Floating Particles
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 35;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 15 + 12}s;
            animation-delay: ${Math.random() * 15}s;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
        `;
        container.appendChild(particle);
    }
}

// Navigation Scroll Effect
function initNavScroll() {
    const nav = document.getElementById('nav');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Close mobile menu if open
                const navLinks = document.getElementById('navLinks');
                const mobileBtn = document.getElementById('mobileMenuBtn');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    if (mobileBtn) mobileBtn.textContent = '☰';
                }
                
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .app-overview-card, .social-card, .screenshot-item, .feature-highlight, .privacy-banner, .platform-download'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Screenshot Tab Switching
function initScreenshotTabs() {
    const tabs = document.querySelectorAll('.screenshot-tab');
    const windowsGallery = document.getElementById('windowsScreenshots');
    const iosGallery = document.getElementById('iosScreenshots');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show/hide galleries
            const targetTab = tab.dataset.tab;
            
            if (targetTab === 'windows') {
                windowsGallery.classList.remove('hidden');
                iosGallery.classList.add('hidden');
            } else {
                windowsGallery.classList.add('hidden');
                iosGallery.classList.remove('hidden');
            }
        });
    });
}

// Console Easter Egg
console.log(`
%c 😈 RED ANGEL 😈 
%c ═══════════════════════════════════════
%c Private AI for Windows & iOS
%c No Cloud. No Tracking. Your Data.
%c ═══════════════════════════════════════

%c 🖥️  Windows: Devil's Senate Command Center
%c 📱  iOS: Personal AI Companion

%c ⬇️  Download: https://redangel.fun
%c 𝕏  Community: https://x.com/i/communities/1983507349546357091

%c Made with ❤️ by Shayz Productions
`,
'color: #ff2d2d; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #ff2d2d;',
'color: #ff2d2d;',
'color: #ffffff; font-size: 14px;',
'color: #ff6b6b; font-size: 12px; font-style: italic;',
'color: #ff2d2d;',
'color: #ff6b6b; font-size: 12px;',
'color: #007AFF; font-size: 12px;',
'color: #00ff88; font-size: 12px;',
'color: #00ff88; font-size: 12px;',
'color: #ffd700; font-size: 11px; margin-top: 10px;'
);
