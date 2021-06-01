let _closeBtn = document.querySelector('.closeBtn');
let _shippingBtns = document.querySelector('.shipping-btns');
let _upCloseBtn = document.querySelector('.upCloseBtn');
let _prenav = document.querySelector('.pre-nav');
let _navBar = document.querySelector('.navbar');

//to hold the trending gifts IDs to deal with them


var clickCounter = 0; //to count the clicks for prenav blue row
_closeBtn.addEventListener("click", function() {
    //css code animation to reduce and delete the height
    _shippingBtns.style.height = '0';
    _shippingBtns.style.display = 'none';
});

_upCloseBtn.addEventListener('click', function() {
    //css code animation to reduce and delete the height
    clickCounter++;
    if (clickCounter % 2 == 0) {
        _prenav.style.height = '35px';
        _prenav.style.display = 'block';
        _upCloseBtn.classList.remove('fa-angle-down');
        _upCloseBtn.classList.add('fa-chevron-up');
    } else {
        _prenav.style.height = '0';
        _prenav.style.display = 'none';
        _upCloseBtn.classList.remove('fa-chevron-up');
        _upCloseBtn.classList.add('fa-angle-down');
    }
})

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('.fixed-nav').classList.add("position-fixed");
    } else {
        document.querySelector('.fixed-nav').classList.remove("position-fixed");
    }
});

//Trending Gifts cells section