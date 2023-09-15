console.log('1. Вёрстка валидная +10');
console.log('2. Вёрстка семантическая +20');
console.log('3. Вёрстка соответствует макету +48');
console.log('4. Требования к css + 12');
console.log('5. Интерактивность, реализуемая через css +20');
console.log('Общий балл: 110');





(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const menuCloseItem = document.querySelector('.header__nav-close');
   const menuLinks = document.querySelectorAll('.header__link');

   burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav__active');

   });
   menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav__active');
   })
   if (window.innerWidth <= 768) {
      for (let i = 0; i < menuLinks.length; i++) {
         menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header__nav__active');
         });
      }
   }
}());

(function () {

   const garden = document.querySelector('#garden_btn');
   const lawn = document.querySelector('#lawn_btn');
   const planting = document.querySelector('#planting_btn');

   const gardenCard1 = document.querySelector('#garden1');
   const gardenCard2 = document.querySelector('#garden2');
   const lawnCard1 = document.querySelector('#lawn1');
   const plantingCard1 = document.querySelector('#planting1');
   const plantingCard2 = document.querySelector('#planting2');
   const plantingCard3 = document.querySelector('#planting3');

   garden.addEventListener('click', () => {
      gardenCard1.style.filter = 'blur(0px)';
      gardenCard2.style.filter = 'blur(0px)';
      lawnCard1.style.filter = 'blur(2px)';
      plantingCard1.style.filter = 'blur(2px)';
      plantingCard2.style.filter = 'blur(2px)';
      plantingCard3.style.filter = 'blur(2px)';
   });

   lawn.addEventListener('click', () => {
      gardenCard1.style.filter = 'blur(2px)';
      gardenCard2.style.filter = 'blur(2px)';
      lawnCard1.style.filter = 'blur(0px)';
      plantingCard1.style.filter = 'blur(2px)';
      plantingCard2.style.filter = 'blur(2px)';
      plantingCard3.style.filter = 'blur(2px)';
   });

   planting.addEventListener('click', () => {
      gardenCard1.style.filter = 'blur(2px)';
      gardenCard2.style.filter = 'blur(2px)';
      lawnCard1.style.filter = 'blur(2px)';
      plantingCard1.style.filter = 'blur(0px)';
      plantingCard2.style.filter = 'blur(0px)';
      plantingCard3.style.filter = 'blur(0px)';
   });






}())