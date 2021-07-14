//Drop down menu
var headerPopover = document.querySelector('.header__menu-popover--box');
function togglePopover() {
    headerPopover.classList.toggle('popover--opened');
}

window.onclick = function(e) {
    if(!e.target.matches('.header__menu-item--select') && !e.target.matches('.header__menu-img') && 
    !e.target.matches('.header__menu-currency') && !e.target.matches('.header__menu-img-wrapper') && 
    !e.target.matches('.header__menu-text')) {
        var dropdowns = document.getElementsByClassName('header__menu-popover--box');
        var i;
        for(i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('popover--opened')) {
                openDropdown.classList.remove('popover--opened');
            }
        }
    }
}

// slider
let count = 1;
setInterval(function() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 3) {
        count = 1;
    }
}, 5000);

//Content location slider
let locationDiv = document.querySelector('.content-section__location-wrapper');
let locationDivHidden = document.querySelectorAll('.content-section__location--hidden');
let locationSlides = document.getElementsByClassName('content-section__location-link');
let btnLocationPrevious = document.querySelector('.content-section-btn--previous');
let btnLocationNext = document.querySelector('.content-section-btn--next');
let slideMove = 0;
let movePer = 107;
let maxMove = 321;
let locationSlidePage = Math.ceil(locationSlides.length/5);

if(btnLocationPrevious.getAttribute('aria-disabled') === 'true') {
     btnLocationPrevious.classList.add('disable-btn');
}




let rightMoveLocation = () => {
    slideMove = slideMove + movePer;
    if(slideMove === 0) {
        slideMove = 0;
    }
    for(const locationSlide of locationSlides) {
        if(slideMove > maxMove) {
            slideMove = slideMove - movePer;
        }
        locationSlide.style.left = '-' + slideMove + '%';
    }
}

let leftMoveLocation = () => {
    slideMove = slideMove - movePer;
    if(slideMove <= 0) {
        slideMove = 0;
    }
    for(const locationSlide of locationSlides) {
        if(locationSlidePage > 1) {
            locationSlide.style.left = '-' + slideMove + '%'
        }
    }
}

btnLocationNext.onclick = () => {
    btnLocationPrevious.setAttribute('aria-disabled', 'false')
    btnLocationPrevious.classList.remove('disable-btn');

    if(locationSlides[0].style.getPropertyValue('left') === '' || locationSlides[0].style.getPropertyValue('left') === '0%') {
        locationSlides[5].setAttribute('aria-hidden', 'false');
        locationSlides[0].setAttribute('aria-hidden', 'true');
    }
    if(locationSlides[0].style.getPropertyValue('left') === '-107%') {
        locationSlides[6].setAttribute('aria-hidden', 'false');
        locationSlides[1].setAttribute('aria-hidden', 'true');
    }
    if(locationSlides[0].style.getPropertyValue('left') === '-214%') {
        btnLocationNext.setAttribute('aria-disabled', 'true');
        btnLocationNext.classList.add('disable-btn'); 
        locationSlides[7].setAttribute('aria-hidden', 'false');
        locationSlides[2].setAttribute('aria-hidden', 'true');
    }
    rightMoveLocation();
}


btnLocationPrevious.onclick = () => {  
    btnLocationNext.setAttribute('aria-disabled', 'false')
    btnLocationNext.classList.remove('disable-btn');
    if(locationSlides[0].style.getPropertyValue('left') === '-321%') {
        locationSlides[7].setAttribute('aria-hidden', 'true');
        locationSlides[2].setAttribute('aria-hidden', 'false');
    }
    if(locationSlides[0].style.getPropertyValue('left') === '-214%') {
        locationSlides[6].setAttribute('aria-hidden', 'true');
        locationSlides[1].setAttribute('aria-hidden', 'false');
    }
    if(locationSlides[0].style.getPropertyValue('left') === '-107%') {
        btnLocationPrevious.classList.add('disable-btn');
        btnLocationPrevious.setAttribute('aria-disabled', 'true')
        locationSlides[5].setAttribute('aria-hidden', 'true');
        locationSlides[1].setAttribute('aria-hidden', 'false');
    }
    leftMoveLocation()
}

//Content section apartment slider
let apartmentSlides = document.getElementsByClassName('content-section__apartment--link');
let btnApartmentNext = document.querySelector('.content-section__apartment-btn--next');
let btnApartmentPrev = document.querySelector('.content-section__apartment-btn--previous');
let aparmentSlidePages = Math.ceil(apartmentSlides.length/4);

if(btnApartmentPrev.getAttribute('aria-disabled')) {
    btnApartmentPrev.classList.add('disable-btn');
}

let rightMoveApartment = () => {
    slideMove = slideMove + movePer;
    if(slideMove === 0) {
        slideMove = 0;
    }
    for(const apartmentSlide of apartmentSlides) {
        if(slideMove > maxMove) {
            slideMove = slideMove - movePer;
        }
        apartmentSlide.style.left = '-' + slideMove + '%';
    }
}

let leftMoveApartment = () => {
    slideMove = slideMove - movePer;
    if(slideMove <= 0) {
        slideMove = 0;
    }
    for(const apartmentSlide of apartmentSlides) {
        if(aparmentSlidePages > 1) {
            apartmentSlide.style.left = '-' + slideMove + '%'
        }
    }
}


btnApartmentNext.onclick = () => {
    btnApartmentPrev.setAttribute('aria-disabled', 'false');
    btnApartmentPrev.classList.remove('disable-btn');
    if(apartmentSlides[0].style.getPropertyValue('left') === '' || apartmentSlides[0].style.getPropertyValue('0%')) {
        apartmentSlides[4].setAttribute('aria-hidden', 'false');
        apartmentSlides[0].setAttribute('aria-hidden', 'true');
    }
    if(apartmentSlides[0].style.getPropertyValue('left') === '-107%') {
        apartmentSlides[5].setAttribute('aria-hidden', 'false');
        apartmentSlides[1].setAttribute('aria-hidden', 'true');
    }
    if(apartmentSlides[0].style.getPropertyValue('left') === '-214%') {
        btnApartmentNext.setAttribute('aria-disabled', 'true');
        btnApartmentNext.classList.add('disable-btn'); 
        apartmentSlides[6].setAttribute('aria-hidden', 'false');
    }
    rightMoveApartment();
}

btnApartmentPrev.onclick = () => {
    btnApartmentNext.setAttribute('aria-disabled', 'false')
    btnApartmentNext.classList.remove('disable-btn');
    if(apartmentSlides[0].style.getPropertyValue('left') === '-321%') {
        apartmentSlides[6].setAttribute('aria-hidden', 'true');
        apartmentSlides[2].setAttribute('aria-hidden', 'false');
    }
    if(apartmentSlides[0].style.getPropertyValue('left') === '-214%') {
        apartmentSlides[5].setAttribute('aria-hidden', 'true');
        apartmentSlides[1].setAttribute('aria-hidden', 'false');
    }
    if(apartmentSlides[0].style.getPropertyValue('left') === '-107%') {
        btnApartmentPrev.classList.add('disable-btn');
        btnApartmentPrev.setAttribute('aria-disabled', 'true')
        apartmentSlides[5].setAttribute('aria-hidden', 'true');
        apartmentSlides[0].setAttribute('aria-hidden', 'false');
    }
    leftMoveApartment();
}

// content section travel
let travelSlides = document.getElementsByClassName('content-section__travel--background');
let travelBtnNext = document.querySelector('.content-section__travel-btn--next');
let travelBtnPrev = document.querySelector('.content-section__travel-btn--previous');
let travelPages = Math.ceil(travelSlides.length/3);
let travelSlideMove = 0;
let travelMovePer = 104;
let travelMaxMove = 1248;

if(travelBtnPrev.getAttribute('aria-disabled')) {
    travelBtnPrev.classList.add('disable-btn');
}

let travelRightMove = () => {
    travelSlideMove = travelSlideMove + travelMovePer;
    if(travelSlideMove === 0) {
        travelSlideMove = 0;
    } 
    for(const travelSlide of travelSlides) {
        if(travelSlideMove > travelMaxMove) {
            travelSlideMove = travelSlideMove - travelMovePer;
        }
        travelSlide.style.left = '-' + travelSlideMove + '%'; 
    }
}

let travelLeftMove = () => {
    travelSlideMove = travelSlideMove - travelMovePer;
    if(travelSlideMove <= 0) {
        travelSlideMove = 0;
    }
    for(const travelSlide of travelSlides) {
        if(travelPages > 1) {
            travelSlide.style.left = '-' + travelSlideMove + '%'; 
        }
    }
}

travelBtnNext.onclick = () => {
    travelBtnPrev.setAttribute('aria-disabled', 'false');
    travelBtnPrev.classList.remove('disable-btn');
    if(travelSlides[0].style.getPropertyValue('left') === '-1144%') {
        travelBtnNext.classList.add('disable-btn');
        travelBtnNext.setAttribute('aria-disabled', 'true');
    }
    travelRightMove();
}

travelBtnPrev.onclick = () => {
    travelBtnNext.setAttribute('aria-disabled', 'false');
    travelBtnNext.classList.remove('disable-btn');
    if(travelSlides[0].style.getPropertyValue('left') === '-104%') {
        travelBtnPrev.classList.add('disable-btn');
        travelBtnPrev.setAttribute('aria-disabled', 'true');
    }
    travelLeftMove();
}





