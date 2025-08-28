// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let darkMode = localStorage.getItem('dark-mode');

  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
  }
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'inactive');
  }

  // Set initial mode
  if (darkMode === 'active' || (darkMode === null && prefersDark)) {
    enableDarkMode();
  }

  themeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
  });
});