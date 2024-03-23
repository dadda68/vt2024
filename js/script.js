function togglePopupOne() {
    document.getElementById("popup-1").classList.toggle("active");
}
function togglePopupTwo() {
    document.getElementById("popup-2").classList.toggle("active");
}
function togglePopupThree() {
    document.getElementById("popup-3").classList.toggle("active");
}
function togglePopupFour() {
    document.getElementById("popup-4").classList.toggle("active");
}
function togglePopupFive() {
    document.getElementById("popup-5").classList.toggle("active");
}
function togglePopupSix() {
    document.getElementById("popup-6").classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('header ul');
  
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active'); // Toggle the active class on click
    });
    
    // Close the menu when a nav item is clicked (optional)
    const navItems = document.querySelectorAll('header ul li a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        navList.classList.remove('active'); // Remove the active class when a nav item is clicked
      });
    });
  });