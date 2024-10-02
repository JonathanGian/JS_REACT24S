alert("hello")
const backToTop = document.querySelector("#backtopBtn")

console.log(backToTop)

backToTop.addEventListener("click",() => {
document.body.scrollTop= 0;
document.documentElement.scrollTop = 0;

})