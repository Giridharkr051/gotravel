// JavaScript code for responsive navigation
const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu");

// Toggle the menu when the menu button is clicked
menuButton.addEventListener("click", () => {
  menuList.classList.toggle("show-menu");
});

// Close the menu if a menu item is clicked
const menuItems = document.querySelectorAll(".menu li a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuList.classList.remove("show-menu");
  });
});
