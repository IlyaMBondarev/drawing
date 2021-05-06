
document.querySelector('.page').classList.add('loaded');
let calculator = document.querySelector('.calculator');

if (calculator) {
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
}

let nav = document.querySelector('.nav');

function checkScroll() {
    if (document.documentElement.scrollTop > 200) {
        return true
    } else {
        return false
    }
}

if (checkScroll()) {
    nav.classList.add('active');
}

window.addEventListener('scroll', () => {
    if (checkScroll()) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})

let navs = document.querySelectorAll('._nav');
let blocksToScroll = document.querySelectorAll('._block-to-scroll');

navs.forEach(nav => {
    let links = nav.querySelectorAll('._nav-link');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            blocksToScroll[index] 
                ? blocksToScroll[index].scrollIntoView({
                    behavior: 'smooth'
                }) 
                : '';
        })
    })
})
let popupBG = document.querySelector('.popup-bg');
let popupCloser = popupBG.querySelector('.popup');
let popupPolitics = popupBG.querySelector('.popup-politics');
let popupBurger = popupBG.querySelector('.popup-burger');
let popupCallback = popupBG.querySelector('.popup-callback');
let popupThanks = popupBG.querySelector('.popup-thanks');

let popupPoliticsOpeners = document.querySelectorAll('._popup-politics-opener');
let popupBurgerOpeners = document.querySelectorAll('._popup-burger-opener');
let popupCallbackOpeners = document.querySelectorAll('._popup-callback-opener');

let popupBurgerClosers = document.querySelectorAll('._popup-burger-closer');

popupCloser.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target === popupCloser || event.target === popupBG) {
        popupBG.classList.remove('active');
        popupPolitics.classList.remove('active');
        popupBurger.classList.remove('active');
        popupBurgerOpeners.forEach(opener => {
            opener.classList.remove('active');
        });
        popupCallback.classList.remove('active');
        popupThanks.classList.remove('active');
    }
})

popupBurgerClosers.forEach(closer => {
    closer.addEventListener('click', (event) => {
        event.preventDefault();
        popupBG.classList.remove('active');
        popupPolitics.classList.remove('active');
        popupBurgerOpeners.forEach(opener => {
            opener.classList.remove('active');
        })
    })
})

popupCallbackOpeners.forEach(opener => {
    opener.addEventListener('click', (event) => {
        event.preventDefault();
        popupBG.classList.add('active');
        popupCallback.classList.add('active');
    })
})

popupPoliticsOpeners.forEach(opener => {
    opener.addEventListener('click', (event) => {
        event.preventDefault();
        popupBG.classList.add('active');
        popupPolitics.classList.add('active');
    })
})

popupBurgerOpeners.forEach(opener => {
    opener.addEventListener('click', (event) => {
        event.preventDefault();
        if (popupBG.classList.contains('active')) {
            popupBG.classList.remove('active');
            popupBurger.classList.remove('active');
            popupBurgerOpeners.forEach(opener => {
                opener.classList.remove('active');
            })
        } else {
            popupBG.classList.add('active');
            popupBurger.classList.add('active');
            popupBurgerOpeners.forEach(opener => {
                opener.classList.add('active');
            })
        }
    })
})
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
  simulateTouch: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
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
  simulateTouch: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 350,
    },
    1800: {
      slidesPerView: 3,
      spaceBetween: -350,
    }
  },
});
function isValid(input) {
    if (input.name === 'name' || input.name === 'city') {
        return !!input.value;
    } 
    if (input.name === 'phone') {
        if (input.value[0] === '+') {
            let val = input.value.split('');
            val.shift();
            val = val.join('');
            return val.length === 11 && !isNaN(+val)
        } else {
            return input.value.length === 11 && !isNaN(input.value)
        }
    }
    if (input.name === 'mail') {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input.value).toLowerCase());
    }
}


let forms = document.querySelectorAll('form');



forms.forEach(form => {
    let requiredInputs = form.querySelectorAll('._req');

    requiredInputs.forEach(req => {
        req.addEventListener('input', () => {
            req.classList.remove('_error');
        })
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let errors = 0;

        requiredInputs.forEach(req => {
            if (!isValid(req)) {
                errors++;
                req.classList.add('_error');
            }
        })

        if (!errors) {
            //отправка письма
            popupBG.classList.add('active');
            popupThanks.classList.add('active');
        }
    })
})