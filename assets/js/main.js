// search:

var strs = [
    "Tìm kiếm ở đây",
    "Conan",
    "Trinh thám",
    "Truyện hài",
    "Thiếu nhi", 
    "Ngôn tình",
]
var header_input = document.getElementById("header__search");
function Write (str) {
    var tmp = "";
    var i=0;
    var work = setInterval(() => {
        tmp = tmp+str[i] ;
        header_input.placeholder = `${tmp}`;
        i = i+1;
        if (i == str.length)
            clearInterval(work);
    }, 100);
}

var j = 1;
var work2 = setInterval(() => {
    Write(strs[j]);
    // Delete(s[j]);
    j = j+1;
    if (j == strs.length)
        j=0;
}, 5000);

// search.

// slider:

var slider_imgs = document.querySelector(".slider__box__imgs");
var slider_img_length = document.querySelector(".slider__box__imgs img").offsetWidth;
var slider_imgs_count = document.querySelectorAll(".slider__box__imgs img").length;
var slider_nav = document.querySelectorAll(".slider__box__nav span");
var slider_box_next = document.querySelector(".slider__box__next");
var slider_box_back = document.querySelector(".slider__box__prev");
var c = 0;

function slide() {
    if (c >= slider_imgs_count-1)
        c = 0;
    else 
        c = c+1;
    slider_imgs.style.transform = `translateX(-${slider_img_length*c}px)`
    document.querySelector(".active").classList.remove("active");
    slider_nav[c].classList.add("active");
}

function slide_back() {
    if (c <= 0) {
        c = slider_imgs_count-1;
    } else {
        c = c-1;
    }
    slider_imgs.style.transform = `translateX(-${slider_img_length*c}px)`
    document.querySelector(".active").classList.remove("active");
    slider_nav[c].classList.add("active");
}

function resetInterval () {
    clearInterval(slide_change);
    slide_change = setInterval(() => {
        slide();
    }, 5000);
}

var slide_change = setInterval(() => {
    slide();
}, 5000);

slider_box_next.addEventListener("click", () => {
    resetInterval();
    slide();
})

slider_box_back.addEventListener("click", () => {
    slide_back();
    resetInterval();
})

// slider.

// light:
    var html = document.querySelector("html");
    var light_btn = document.getElementById("light__btn");
    var header = document.querySelector(".header__nav");

    function lightOff() {
        html.classList.toggle("dark");
        header.classList.toggle("header__nav-dark");
    }

    light_btn.addEventListener("change", () => {
        lightOff();
    })

// light.