// Variable
let hamburger = document.querySelector('.hamburger-menu');
let menuMobile = document.querySelector('.mobile-nav');
let bodyHtml = document.querySelector('.body');
let listMenu = document.querySelectorAll('.menu-list');
let navMenu = document.querySelectorAll('.nav-menu')
let navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Function
// Hamburger Mobile
hamburger.addEventListener('click', function(){
    menuMobile.classList.toggle('hidden');
    bodyHtml.classList.toggle('overflow-hidden');
    
})

// Mobile Menu On Click
for(let i = 0; i < listMenu.length; i++){
    listMenu[i].addEventListener('click', function(){
    menuMobile.classList.add('hidden');
        bodyHtml.classList.remove('overflow-hidden');
})
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset == sticky) {
    navbar.classList.remove("fixed");
    navbar.classList.remove('bg-white');
    } else {
        navbar.classList.add("fixed");
        navbar.classList.add('bg-white');
    }
}
