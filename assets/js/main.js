// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
    });
  }

  // Mobile dropdown toggle on tap
  var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown > a');
  dropdownItems.forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        var parent = link.parentElement;
        var isOpen = parent.classList.contains('is-dropdown-open');

        document.querySelectorAll('.nav-item.is-dropdown-open').forEach(function(item) {
          item.classList.remove('is-dropdown-open');
        });

        if (!isOpen) {
          e.preventDefault();
          parent.classList.add('is-dropdown-open');
        }
      }
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function(e) {
    if (nav && nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Hero assessment widget
  var widget = document.getElementById('hero-widget');
  if (widget) {
    widget.addEventListener('click', function(e) {
      var btn = e.target.closest('.widget-option');
      var back = e.target.closest('.widget-back');

      if (btn) {
        var href = btn.getAttribute('data-href');
        var next = btn.getAttribute('data-next');

        if (href) {
          window.location.href = href;
        } else if (next) {
          widget.querySelector('.widget-step.is-active').classList.remove('is-active');
          widget.querySelector('[data-step="' + next + '"]').classList.add('is-active');
        }
      }

      if (back) {
        var target = back.getAttribute('data-back');
        widget.querySelector('.widget-step.is-active').classList.remove('is-active');
        widget.querySelector('[data-step="' + target + '"]').classList.add('is-active');
      }
    });
  }

  // Scroll-triggered fade-up animations
  var fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function(el) { observer.observe(el); });
  }
});
