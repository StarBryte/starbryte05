let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "UX Designer", "Graphics Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

