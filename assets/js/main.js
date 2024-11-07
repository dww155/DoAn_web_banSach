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
