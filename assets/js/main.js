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

var slide_change = setInterval(() => {
    slide();
}, 5000);

function resetInterval () {
    clearInterval(slide_change);
    slide_change = setInterval(() => {
        slide();
    }, 5000);
}

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

// content:

var dssp = document.querySelector(".content__box");
var products = [
    {anh:"./assets/img/book1.png", ten: "sach 1", gia: 100000},
    {anh:"./assets/img/book2.png", ten: "sach 2", gia: 200000},
    {anh:"./assets/img/book3.png", ten: "sach 3", gia: 300000},
    {anh:"./assets/img/book4.png", ten: "sach 4", gia: 400000},
    {anh:"./assets/img/book5.png", ten: "sach 5", gia: 500000},
    {anh:"./assets/img/book6.png", ten: "sach 6", gia: 600000},
    {anh:"./assets/img/book7.png", ten: "sach 7", gia: 700000},
    {anh:"./assets/img/book8.png", ten: "sach 8", gia: 800000},
    {anh:"./assets/img/book9.png", ten: "sach 9", gia: 900000},
    {anh:"./assets/img/book10.png", ten: "sach 10", gia: 1000000},
    {anh:"./assets/img/book11.png", ten: "sach 11", gia: 5110000},
    {anh:"./assets/img/book12.png", ten: "sach 12", gia: 6012000},
]
var currentPage = 1;
var perPage = 2 ;
var pages = Math.ceil(products.length / perPage);
var pageNumberShow = document.getElementById("pagination_number");
var pagination_begin = document.getElementById("pagination_begin");
var pagination_prev = document.getElementById("pagination_prev");
var pagination_next = document.getElementById("pagination_next");
var pagination_end = document.getElementById("pagination_end");

function showPage (pageNumber) {
    dssp.innerHTML = "";
    var begin = (pageNumber-1) * perPage ;
    var end = begin + perPage;
    console.log(begin, end) ;
    for (var i = begin ; i < end ; i++) {
        if (i >= products.length)
            return;
        var sp = `
        <div class="content__box__item">
            <img src=${products[i].anh} alt="">
            <h3>ten san pham: ${products[i].ten}</h3>
            <h3>gia san pham: ${products[i].gia}</h3>
        </div>
        `
        dssp.innerHTML += sp ; 
    }
}

function setPageNumber (pageNumber) {
    pageNumberShow.innerText = pageNumber;
}

showPage(1);

pagination_begin.onclick = () => {
    currentPage = 1 ; 
    showPage(1);
    setPageNumber(1);
}
pagination_end.onclick = () => {
    currentPage = pages ; 
    showPage(pages);
    setPageNumber(pages);
}
pagination_next.onclick = () => {
    if (currentPage >= pages) 
        return ; 
    
    ++currentPage;
    showPage(currentPage);
    setPageNumber(currentPage);
}
pagination_prev.onclick = () => {
    if (currentPage <= 1) 
        return ; 
    
    --currentPage;
    showPage(currentPage);
    setPageNumber(currentPage);
}

// content.