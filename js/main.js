
document.querySelector('.page').classList.add('loaded');
let calculator = document.querySelector('.calculator');
let rangeItems = calculator.querySelectorAll('.range');
let totalBlock = calculator.querySelector('.total');

let rangeCounts = [875, 750, 1100]; //цена за 1 абонемент
let total = 0;

rangeItems.forEach((block, index) => {
    let range = block.querySelector('input[type="range"]');
    let min = block.querySelector('.min');
    let curr = block.querySelector('.curr');
    let max = block.querySelector('.max');
    
    min.innerHTML = range.min;
    curr.innerHTML = range.value;
    max.innerHTML = range.max;
    total += rangeCounts[index] * range.value;

    let backgroundRange = (+range.value - +range.min) / (+range.max - +range.min);

    curr.style.left = `calc(${backgroundRange} * (100% - 25px) + 12.5px)`;
    range.style.background = `linear-gradient(93.95deg, #F36E2A ${11.59 * backgroundRange}%, #FEBD66 calc(${100 * backgroundRange}% + ${10 - 20 * backgroundRange}px), #E9E9E9 calc(${100 * backgroundRange}% + ${10 - 20 * backgroundRange}px), #E9E9E9 100%)`;

    range.addEventListener('input', () => {
        total -= rangeCounts[index] * +(curr.innerHTML);
        curr.innerHTML = range.value;
        total += rangeCounts[index] * range.value;
        totalBlock.innerHTML = total.toString().split('').reverse().join('').match(/.{1,3}/g).join(' ').split('').reverse().join('');
        backgroundRange = (+range.value - +range.min) / (+range.max - +range.min);
        curr.style.left = `calc(${backgroundRange} * (100% - 25px) + 12.5px)`;
        range.style.background = `linear-gradient(93.95deg, #F36E2A ${11.59 * backgroundRange}%, #FEBD66 calc(${100 * backgroundRange}% + ${10 - 20 * backgroundRange}px), #E9E9E9 calc(${100 * backgroundRange}% + ${10 - 20 * backgroundRange}px), #E9E9E9 100%)`;
    })
})

totalBlock.innerHTML = total.toString().split('').reverse().join('').match(/.{1,3}/g).join(' ').split('').reverse().join('');
const swiperVideos = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3,
});

const swiperReplies = new Swiper('.swiper-container-2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  loop: true,
  spaceBetween: -350,
  slidesPerView: 3,
});