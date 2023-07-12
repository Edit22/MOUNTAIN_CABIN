const btn = document.querySelector(".menuBtn");
const aside = document.querySelector(".menu__aside");
const btnClose = document.querySelector(".close__btn");

btn.addEventListener('click', function() {
    aside.style.display = "block";
})

btnClose.addEventListener('click', function(){
    aside.style.display = "none";
})
