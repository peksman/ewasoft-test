export function initHamburger() {
    document.querySelector('.hamburger').addEventListener('click', function() {
        this.classList.toggle('hamburger__open');
        document.body.classList.toggle('body__locked');
        document.querySelector('.main-navigation').classList.toggle('active');
        document.querySelector('.site-header__left').classList.toggle('active');
        document.querySelector('.site-header__right').classList.toggle('active');
    });    
}