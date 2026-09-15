// Reveal sections gently on first load.
document.addEventListener('DOMContentLoaded', function () {
  var blocks = document.querySelectorAll('.sheet > *');
  blocks.forEach(function (el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    setTimeout(function () {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }, 60 * i);
  });
});
