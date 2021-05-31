let _closeBtn = document.querySelector('.closeBtn');
let _shippingBtns = document.querySelector('.shipping-btns');
let _upCloseBtn = document.querySelector('.upCloseBtn');
let _prenav = document.querySelector('.pre-nav');
let _navBar = document.querySelector('.navbar');

//to hold the trending gifts IDs to deal with them
let _uniqueRow = document.getElementById('uniqueRow');
let _unique = document.getElementById('unique');
let _pillshometab = document.getAnimations('pills-home-tab');
let _pillsprofiletab = document.getAnimations('pills-profile-tab');
let _pillscontacttab = document.getAnimations('pills-contact-tab');
let _pillssaletab = document.getAnimations('pills-sale-tab');

var clickCounter = 0; //to count the clicks for prenav blue row
let giftersResources = [{
    'imgSrc': '../images',
    'title ': 'aa'
}, {
    'imgSrc': '',
    'title ': 'ss'
}, {
    'imgSrc': '',
    'title ': 'dd'
}, {
    'imgSrc': '',
    'title ': 'ff'
}, {
    'imgSrc': '',
    'title ': 'rr'
}];
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
let div = '';

function implementTheGiftsCells() {
    for (var i = 0; i < giftersResources.length; i++) {
        div += `<div class="col-md-4">
    <!--it'll be event to take me another page-->
    <div class="card" style=" width: 18rem; ">
        <img src="${giftersResources[i].imgSrc}" class="card-img-top " alt="... ">
        <div class="card-body ">
            <h5 class="card-title ">${giftersResources[i]["title "]}</h5>
            <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
</div>`;
    }
    _uniqueRow.innerHTML = div;
}