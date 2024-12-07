let smalnav = document.querySelector(".smalnav")
let bignav = document.querySelector(".bignav")
let nav = document.querySelector(".nav")
console.log(smalnav,bignav, nav);

smalnav.addEventListener("click", () => {
    nav.style.display = "block";
    nav.style.width = "20rem";
    smalnav.style.display = "none"
    bignav.style.display = "block"
});
bignav.addEventListener("click", () => {
    nav.style.display = "none";
    nav.style.width = "20rem";
    smalnav.style.display = "block"
    bignav.style.display = "none"

});

