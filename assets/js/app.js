const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$('.swiper-wrap').on('click', '.slide-item', function() {
    const index = $(this).data('index');
    mySwiper.slideTo(index);
});
                       
const slideItem = document.querySelectorAll('.slide-item');
const mainSlide = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');

mySwiper.on('slideChange', () => {
    let currIndexSlide = mySwiper.realIndex;

    switch(currIndexSlide) {
        case 0:
            slideItem[0].classList.add('slide-item_active');
            slideItem[1].classList.remove('slide-item_active');
            slideItem[2].classList.remove('slide-item_active');
        break;
        case 1:
            slideItem[1].classList.add('slide-item_active');
            slideItem[0].classList.remove('slide-item_active');
            slideItem[2].classList.remove('slide-item_active');
        break;
        case 2:
            slideItem[2].classList.add('slide-item_active');
            slideItem[0].classList.remove('slide-item_active');
            slideItem[1].classList.remove('slide-item_active');
        break;
        default:
            console.log('slideChange');
    }
});

const formBtns = document.querySelectorAll('.form__btn');
const gallerySubmBtn = document.querySelectorAll('.modal-btn');

const iterAllBtns = (allBtns) => {
    for (let btn of allBtns) {
        btn.addEventListener('click', () => {
            Swal.fire(
                'Good job!',
                'Enter your phone number!',
                'success'
            );
            modal.style.display = "none";
            stagesModalConteiner.style.display = 'none';
            document.querySelector('body').style.overflow = 'visible';
        });
    }
};

iterAllBtns(formBtns);
iterAllBtns(gallerySubmBtn);

const headerFixed = document.querySelector('.header-inner');
const logo = document.getElementById('logo');
const imgLogo = [
    './assets/images/header/logo.png',
    './assets/images/header/logo_fixed.png',
];

window.onscroll = () => {
    let scrollY = window.scrollY
    scrollY > 100 ? headerFixed.classList.add('header-inner__active') : headerFixed.classList.remove("header-inner__active");
    scrollY > 100 ? logo.src = `${imgLogo[1]}` : logo.src = `${imgLogo[0]}`;
}

// Gallery 
let gallerySwiper = new Swiper('.gallery-swiper-container', {
    spaceBetween: 15,
    loopFillGroupWithBlank: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        565: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        1250: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
    },
});

let gallerySwiperBottom = new Swiper('.second-gallery-slider', {
    slidesPerView: 5,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        565: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        1250: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
    },
});

gallerySwiper.controller.control = gallerySwiperBottom;
gallerySwiperBottom.controller.control = gallerySwiper;

const modalCont = document.querySelector(".modal__box");
const modal = document.getElementById("galleryModal");
const modalBtnClose = document.querySelectorAll(".modal__close");
const swiperSlidePool = document.querySelectorAll('.swiper-slide-pool');
const stagesModalConteiner = document.querySelector('#stagesModal');
const openModalDetailBtns = document.querySelectorAll('.stages-container__btn');

const getSrcImages = (e) => {
    let target = e.target;
    let imgSrc = target.src;
    modalCont.children[0].children[0].setAttribute('src', imgSrc);
}

for (btn of modalBtnClose) {
    btn.addEventListener('click', () => {
        modal.style.display = 'none';
        stagesModalConteiner.style.display = 'none';
        document.querySelector('body').style.overflow = 'visible';
    });
}

for (item of swiperSlidePool) {
    item.addEventListener('click', e => {
        e.preventDefault();
        getSrcImages(e);
        modal.style.display = "block";
        document.querySelector('body').style.overflow = 'hidden';
    });
}

for (detailBtn of openModalDetailBtns) {
    detailBtn.addEventListener('click', e => {
        e.preventDefault();
        stagesModalConteiner.style.display = "block";
        document.querySelector('body').style.overflow = 'hidden';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal || e.target === stagesModalConteiner) {
        modal.style.display = "none";
        stagesModalConteiner.style.display = 'none';
        document.querySelector('body').style.overflow = 'visible';
    }
});

// Stages 
const stagesMySwiper = new Swiper('.stages-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.stages-btn-next',
      prevEl: '.stages-btn-prev',
    },
});

$('.stages__steps').on('click', '.stages-box', function() {
    const index = $(this).data('index');
    stagesMySwiper.slideTo(index);
});

const slideStagesItem = document.querySelectorAll('.stages-box');

stagesMySwiper.on('slideChange', () => {
    let currIndexSlide = stagesMySwiper.realIndex;

    switch(currIndexSlide) {
        case 0:
            slideStagesItem[0].classList.add('stages-box__active');
            slideStagesItem[1].classList.remove('stages-box__active');
            slideStagesItem[2].classList.remove('stages-box__active');
            slideStagesItem[3].classList.remove('stages-box__active');
            slideStagesItem[4].classList.remove('stages-box__active');
        break;
        case 1:
            slideStagesItem[1].classList.add('stages-box__active');
            slideStagesItem[0].classList.remove('stages-box__active');
            slideStagesItem[2].classList.remove('stages-box__active');
            slideStagesItem[3].classList.remove('stages-box__active');
            slideStagesItem[4].classList.remove('stages-box__active');
        break;
        case 2:
            slideStagesItem[2].classList.add('stages-box__active');
            slideStagesItem[0].classList.remove('stages-box__active');
            slideStagesItem[1].classList.remove('stages-box__active');
            slideStagesItem[3].classList.remove('stages-box__active');
            slideStagesItem[4].classList.remove('stages-box__active');
        break;
        case 3:
            slideStagesItem[3].classList.add('stages-box__active');
            slideStagesItem[0].classList.remove('stages-box__active');
            slideStagesItem[1].classList.remove('stages-box__active');
            slideStagesItem[2].classList.remove('stages-box__active');
            slideStagesItem[4].classList.remove('stages-box__active');
        break;
        case 4:
            slideStagesItem[4].classList.add('stages-box__active');
            slideStagesItem[0].classList.remove('stages-box__active');
            slideStagesItem[1].classList.remove('stages-box__active');
            slideStagesItem[2].classList.remove('stages-box__active');
            slideStagesItem[3].classList.remove('stages-box__active');
        break;
        default:
            console.log('slideChange');
    }
});

// Consultation

const costExpertElems = document.querySelectorAll('.cost-expert');
const costFormElems = document.querySelectorAll('.cost-form');

$(costExpertElems).click(function() {
    let targetDataId = $(this).attr("data-consultation");
    $(costExpertElems).removeClass("cost-expert__active");
    $(this).addClass("cost-expert__active");
    $(costFormElems).removeClass("cost-form--active");
    $("#" + targetDataId).addClass("cost-form--active");
});