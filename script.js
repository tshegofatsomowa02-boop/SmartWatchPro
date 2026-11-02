const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Message Sent';
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      contactForm.reset();
    }, 1800);
  });
}
