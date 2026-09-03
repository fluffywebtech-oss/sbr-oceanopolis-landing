(function () {
  'use strict';

  var header = document.getElementById('siteHeader');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  var closeNav = function () {
    nav.classList.remove('open'); toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add('in'); }); }

  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  var open = function (src, alt, cap) {
    lbImg.src = src; lbImg.alt = alt || ''; lbCap.textContent = cap || '';
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  var hide = function () {
    lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; }, 250);
  };
  document.querySelectorAll('.sc-item, .mp-figure, .plan-img').forEach(function (fig) {
    fig.addEventListener('click', function () {
      var img = fig.querySelector('img'); if (!img) return;
      var host = fig.closest('[data-caption]') || fig;
      var cap = host.getAttribute('data-caption') || img.alt;
      open(img.currentSrc || img.src, img.alt, cap);
    });
  });
  lbClose.addEventListener('click', hide);
  lb.addEventListener('click', function (e) { if (e.target === lb) hide(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) hide();
  });

  var form = document.getElementById('enquiryForm');
  var msg = document.getElementById('formMsg');
  var mark = function (el, bad) { el.classList.toggle('err', bad); };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name, phone = form.phone, email = form.email, ok = true;
    if (!name.value.trim()) { mark(name, true); ok = false; } else mark(name, false);
    if (!/^[0-9+\-\s]{10,15}$/.test(phone.value.trim())) { mark(phone, true); ok = false; } else mark(phone, false);
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { mark(email, true); ok = false; }
    else mark(email, false);
    if (!ok) { msg.textContent = 'Please complete the highlighted fields.'; msg.className = 'form-msg bad'; return; }
    msg.textContent = 'Thank you, ' + name.value.trim().split(' ')[0] + '! Our team will reach out shortly.';
    msg.className = 'form-msg ok';
    form.reset();
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
