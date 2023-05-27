
let toggle = document.querySelector(".toggle")

let menu = document.querySelector(".menu")

let home = document.querySelector(".home")

let cards = document.querySelector(".skils")

let contact = document.querySelector(".contact")

toggle.onclick = function(){
   menu.classList.toggle("active")
}
function openNav() {
   document.getElementById("mySidebar").style.width = "60%";
   document.getElementById("mySidebar").style.display = "block";
 }
 
 function closeNav() {
   document.getElementById("mySidebar").style.display = "none";
 }

