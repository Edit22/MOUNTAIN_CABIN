const cabinImg = document.querySelector('.cabinSlideImg');
const cabinBtn = document.querySelector('.cabinNextBtn');


const cabinSlideshow = ['location_cabin/cabin_1.png', 'location_cabin/cabin_2.png', 'location_cabin/cabin_3.png', 'location_cabin/cabin_4.png', 'location_cabin/cabin_6.png'];

let currentCabinSlideshowIndex = 0;

cabinBtn.addEventListener('click', function(){
   if (currentCabinSlideshowIndex >= cabinSlideshow.length -1) {
    currentCabinSlideshowIndex = 0;
   } else {
    currentCabinSlideshowIndex++;
   }

cabinImg.src = cabinSlideshow[currentCabinSlideshowIndex];

});










// const btn = document.querySelector(".menuBtn");
// const aside = document.querySelector(".menu__aside");
// const btnClose = document.querySelector(".close__btn");

// btn.addEventListener('click', function() {
//     aside.style.display = "block";
// })

// btnClose.addEventListener('click', function(){
//     aside.style.display = "none";
// })


// --------------------------------------------------------

// const locationSlideImg = document.querySelector('.location__slideImg');
// const locationNextBtn = document.querySelector('.location__nextBtn');

// const locationSlides = ["location__images/location_mountain_cabin-1.png", "location__images/location_mountain_cabin-2.png", "location__images/location_mountain_cabin-3.png", "location__images/location_mountain_cabin-4.png", "location__images/location_mountain_cabin-5.png" ];
// let currentSlideIndex = 0;

// locationNextBtn.addEventListener('click', function() {
//     currentSlideIndex++;
//     if (currentSlideIndex >= locationSlides.length) {
//        currentSlideIndex = 0; 
//     }

//     locationSlideImg.src = locationSlides[currentSlideIndex];

// });


// ------------------------------------------ 

// const cabinImg = document.querySelector('.cabinSlideImg');
// const cabinBtn = document.querySelector('.cabinNextBtn');

// cabinBtn.addEventListener('click', function() {
//    cabinImg.src ="location_cabin/cabin_4.png";
// });


