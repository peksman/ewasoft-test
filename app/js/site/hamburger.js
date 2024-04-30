export function initHamburger() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        this.classList.toggle('hamburger__open');
        document.body.classList.toggle('body__locked');
        document.querySelector('.main-navigation').classList.toggle('active');
        document.querySelector('.site-header__left').classList.toggle('active');
        document.querySelector('.site-header__right').classList.toggle('active');
    });

    var submenuToggle = document.querySelectorAll(".submenu--opener");

    submenuToggle.forEach(function(item) {
      item.addEventListener("click", function() {
        var parent = this.closest(".menu-item__has-children");
        parent.classList.toggle("open");
      });
    });
}