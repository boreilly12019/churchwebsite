document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuBtn.querySelector('svg');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Simple icon toggle logic could go here if we had different icons for open/close
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Lightbox Functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const galleryImages = document.querySelectorAll('.gallery-item');

  galleryImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior if wrapped in link
      const src = img.getAttribute('src');
      lightboxImg.setAttribute('src', src);
      lightbox.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Contact Form Demo
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent (demo only)');
      contactForm.reset();
    });
  }
});
