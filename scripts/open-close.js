const openMenu =  document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");
const sidebar = document.querySelector(".sidebar");


openMenu.addEventListener("click",()=>{
    sidebar.style.display = "flex";
});

closeMenu.addEventListener("click",()=>{
    sidebar.style.display = "none";
})