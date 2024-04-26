// Header Sticky
window.addEventListener('scroll', function() {
  var header = document.querySelector('.site-header');
  if (window.scrollY > 1) {
    header.classList.add('site-header__sticky');
  } else {
    header.classList.remove('site-header__sticky');
  }
});
