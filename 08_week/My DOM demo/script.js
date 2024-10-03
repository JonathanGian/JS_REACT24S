
const backToTop = document.querySelector("#backtopBtn")
const mobButton = document.querySelector(".mobile")
const navList = document.querySelector("nav ul")
const modalButton = document.querySelector("#dontBtn")
const overLay = document.querySelector(".overlay")
const closeBtn = document.querySelector("#closeBtn")

console.log(backToTop)

backToTop.addEventListener("click",() => {
document.body.scrollTop= 0;
document.documentElement.scrollTop = 0;

})
// window = browser and action is .onscroll
window.onscroll = function() {scrollFunction()};

function toggleMenu() {
    navList.classList.toggle("responsive")
}

function toggleModal(){
    overLay.classList.toggle("visible")
}

mobButton.addEventListener("click",toggleMenu)
modalButton.addEventListener("click",toggleModal)
closeBtn.addEventListener("click",toggleModal)



function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        
        document.querySelector('header').style.backdropFilter = "blur(10px)";
        document.querySelector('header .logo h1').style.fontSize = "12px";
        document.querySelector('header').style.height = "50px";
    } else {
        document.querySelector('header').style.backgroundColor = "transparent";
        document.querySelector('header .logo h1').style.fontSize = "32px";
        document.querySelector('header').style.height = "100px";
    }
}


