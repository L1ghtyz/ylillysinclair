function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.navbar-image').src = "../assets/menu.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.navbar-image').src = "../assets/close.svg";
    }
}