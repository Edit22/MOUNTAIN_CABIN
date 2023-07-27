// const cabinImg = document.querySelector('.cabinSlideImg');
// const cabinBtn = document.querySelector('.cabinNextBtn');


// const cabinSlideshow = ['location_cabin/cabin_1.png', 'location_cabin/cabin_2.png', 'location_cabin/cabin_3.png', 'location_cabin/cabin_4.png', 'location_cabin/cabin_6.png'];

// let currentCabinSlideshowIndex = 0;

// cabinBtn.addEventListener('click', function(){
//    if (currentCabinSlideshowIndex >= cabinSlideshow.length -1) {
//     currentCabinSlideshowIndex = 0;
//    } else {
//     currentCabinSlideshowIndex++;
//    }

// cabinImg.src = cabinSlideshow[currentCabinSlideshowIndex];

// });

// -------------------------------




// const menuOpen = document.querySelector('.menuBtn');

// const menuClose = document.querySelector('.close__btn');
// const menuAside = document.querySelector('.menu__aside');

// menuOpen.addEventListener('click', function() {
//      menuAside.style.right = '310px';
// });

// ----------------------------------



// const cabinButton = document.querySelector('.cabinNextBtn');

// function isMobileScreen() {
//     return window.matchMedia('(max-width: 912px)').matches;
//   }

//   function updateButtonText() {
//     if (isMobileScreen()) {
//         cabinButton.textContent = 'Click to See Photos';
//     } else {
//       cabinButton.textContent = 'Next Photo';
//     }
//   }

//   updateButtonText();

//   window.addEventListener('resize', updateButtonText);

// -----------------------------


const cabinButton = document.querySelector('.cabinNextBtn');

const additionalPhotosContainer = document.querySelector('.additionalPhotos-container');

function isMobileScreen() {
    return window.matchMedia('(max-width: 912px)').matches;
  }

  function toggleAdditionalPhotos() {
    if (isMobileScreen()) {
        additionalPhotosContainer.style.display = additionalPhotosContainer.style.display === 'none' ? 'block' : 'none';
    }
  }

  cabinButton.addEventListener('click', toggleAdditionalPhotos);