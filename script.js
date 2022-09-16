    
 function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 650) {
        navbar.classList.remove('afterScroll');
    } 
    
    else {
        navbar.classList.add('afterScroll');
    }
}

window.addEventListener('scroll', scrollValue);
