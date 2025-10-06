// Clean, Original JavaScript - No Copyright Issues

// Mobile Menu Toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// Smooth Scrolling
function initSmoothScroll() {
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
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: var(--primary-color);
    color: var(--dark-color);
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
  `;
  
  document.body.appendChild(scrollBtn);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.opacity = '1';
    } else {
      scrollBtn.style.opacity = '0';
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSmoothScroll();
  initScrollToTop();
});

// Logo Marquee Animation (Original Implementation)
function initLogoMarquee() {
  const marqueeContainer = document.querySelector('.logo-marquee');
  if (!marqueeContainer) return;
  
  const logos = marqueeContainer.querySelectorAll('.logo-item');
  let currentIndex = 0;
  
  setInterval(() => {
    logos.forEach((logo, index) => {
      logo.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % logos.length;
  }, 3000);
}

// Call marquee init
document.addEventListener('DOMContentLoaded', initLogoMarquee);