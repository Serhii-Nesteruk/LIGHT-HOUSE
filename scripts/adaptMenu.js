document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu ul");
  
    menuToggle.addEventListener("click", function() {
      menuList.classList.toggle("show");
    });
  });
  