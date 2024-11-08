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

// co loi
function Delete (str) {
    var tmp = str;
    var work1 = setInterval(() => {
        header_input.placeholder = `${tmp}`;
        tmp = tmp.slice(0,-1) ;
        if (tmp.length == 0)
            clearInterval(work1);
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
var c = 1;

function slide() {
    slider_imgs.style.transform = `translateX(-${slider_img_length*c}px)`
    document.querySelector(".active").classList.remove("active");
    slider_nav[c].classList.add("active");

    c = c+1;
    if (c >= slider_imgs_count)
        c = 0;
}

setInterval(() => {
    slide();
}, 5000);

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