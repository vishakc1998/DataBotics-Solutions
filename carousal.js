// // Select Elements
// const carouselItems = document.querySelectorAll('.carousel-item');
// const carouselContainer = document.querySelector('.carousel-container');
// const popup = document.getElementById('popup');
// const popupImage = document.getElementById('popup-image');
// const popupDescription = document.getElementById('popup-description');
// const closePopup = document.getElementById('close-popup');

// // Function to Show Popup with Typing Animation
// const openPopup = (imageSrc, description) => {
//   popupImage.src = imageSrc;
//   popupDescription.textContent = ''; // Clear previous text

//   // Typing Effect Implementation
//   let index = 0;
//   const speed = 30; // Typing speed in ms

//   const typeWriter = () => {
//     if (index < description.length) {
//       popupDescription.textContent += description.charAt(index);
//       index++;
//       setTimeout(typeWriter, speed);
//     }
//   };

//   typeWriter();

//   // Set Background Image
//   carouselContainer.style.backgroundImage = `url(${imageSrc})`;

//   // Show Popup
//   popup.classList.add('visible');

//   // Add Blur to Carousel
//   carouselContainer.classList.add('blurred');
// };

// // Function to Close Popup
// const closePopupFunc = () => {
//   popup.classList.remove('visible');
//   carouselContainer.classList.remove('blurred');
// };

// // Add Event Listeners to Carousel Items
// carouselItems.forEach(item => {
//   item.addEventListener('pointerenter', () => {
//     const bgImage = item.dataset.image;
//     carouselContainer.style.backgroundImage = `url(${bgImage})`;
//   });

//   item.addEventListener('click', () => {
//     const imageSrc = item.querySelector('img').src;
//     const description = item.dataset.description;
//     openPopup(imageSrc, description);
//   });
// });

// // Close Popup on Close Button Click
// closePopup.addEventListener('click', closePopupFunc);

// // Close Popup When Clicking Outside Content
// popup.addEventListener('click', (event) => {
//   if (event.target === popup) {
//     closePopupFunc();
//   }
// });


// Select Elements
const carousel = document.querySelector('.carousel'); // Correctly define the carousel element
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselContainer = document.querySelector('.carousel-container');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const closePopup = document.getElementById('close-popup');

// Function to Show Popup with Typing Animation
const openPopup = (imageSrc, description) => {
  popupImage.src = imageSrc;
  popupDescription.textContent = ''; // Clear previous text

  // Typing Effect Implementation
  let index = 0;
  const speed = 30; // Typing speed in ms

  const typeWriter = () => {
    if (index < description.length) {
      popupDescription.textContent += description.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();

  // Set Background Image
  carouselContainer.style.backgroundImage = `url(${imageSrc})`;

  // Show Popup
  popup.classList.add('visible');

  // Add Blur to Carousel
  carouselContainer.classList.add('blurred');
};

// Function to Close Popup
const closePopupFunc = () => {
  popup.classList.remove('visible');
  carouselContainer.classList.remove('blurred');
};

// Add Event Listeners to Carousel Items
carouselItems.forEach(item => {
  item.addEventListener('pointerenter', () => {
    const bgImage = item.dataset.image;
    carouselContainer.style.backgroundImage = `url(${bgImage})`;
  });

  item.addEventListener('click', () => {
    const imageSrc = item.querySelector('img').src;
    const description = item.dataset.description;
    openPopup(imageSrc, description);
  });
});

// Add Touch Scrolling Support
carousel.addEventListener('touchstart', () => {
  carousel.style.overflowX = 'auto'; // Ensure horizontal scrolling is enabled
});

// Close Popup on Close Button Click
closePopup.addEventListener('click', closePopupFunc);

// Close Popup When Clicking Outside Content
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopupFunc();
  }
});
