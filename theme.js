(function () {
  var SUN_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
  var MOON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';

  function getInitialTheme() {
    try {
      var saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function updateThemeToggleIcons(theme) {
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = theme === 'light' ? MOON_SVG : SUN_SVG;
      buttons[i].setAttribute(
        'aria-label',
        theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      );
      buttons[i].setAttribute('title', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    }
  }

  window.toggleTheme = function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    updateThemeToggleIcons(next);
  };

  function attachListeners() {
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      if (!buttons[i].dataset.themeBound) {
        buttons[i].addEventListener('click', function (e) {
          e.preventDefault();
          window.toggleTheme();
        });
        buttons[i].dataset.themeBound = '1';
      }
    }
    updateThemeToggleIcons(document.documentElement.getAttribute('data-theme') || 'dark');

    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle && !navToggle.dataset.navBound) {
      navToggle.dataset.navBound = '1';
      var nav = document.querySelector('nav');

      function closeMenu() {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-label', 'Open menu');
      }

      navToggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });

      var links = nav.querySelectorAll('a');
      for (var j = 0; j < links.length; j++) {
        links[j].addEventListener('click', closeMenu);
      }

      document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && e.target !== navToggle && !navToggle.contains(e.target)) {
          closeMenu();
        }
      });
    }
  }

  applyTheme(getInitialTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachListeners);
  } else {
    attachListeners();
  }
})();
