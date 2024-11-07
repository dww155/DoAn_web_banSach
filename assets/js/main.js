var slider_length = document.querySelector(".slider__box img").offsetWidth;
document.querySelector(".slider__box").style.width = `${slider_length}px`;
var slider_img_counts = document.querySelectorAll(".slider__box__imgs img").length;
var c = 1;
function sliderChange () {
    document.querySelector(".slider__box__imgs").style.transform = `translateX(${slider_length*-1*c}px)`;
    c = c+1;
    if (c == slider_img_counts) {
        // document.querySelector(".slider__box__imgs").style.transition = "unset" ;
        c = 0;
    }
}

setInterval(() => {
    sliderChange();
}, 2000);