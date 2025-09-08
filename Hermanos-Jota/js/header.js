const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuBtnIcono = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const EsOpen = navLinks.classList.contains("open");
    menuBtnIcono.setAttribute("class", EsOpen ? "ri-close-line" : "ri-menu-line")
    
});
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcono.setAttribute("class", "ri-menu-line");
})