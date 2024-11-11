// search:

var strs = [
    "Tìm kiếm ở đây",
    "Trinh thám",
    "Kinh dị",
    "Ma quỷ",
    "Người ngoài hành tinh",
    "UFO",
    "Kinh dị Nhật Bản",
    "Kinh dị Thái Lan",
    "Lớp có tang sự không cần điểm danh",

]
var header_signUp_inpsut = document.getElementById("header__search");
function Write (str) {
    var tmp = "";
    var i=0;
    var work = setInterval(() => {
        tmp = tmp+str[i] ;
        header_signUp_inpsut.placeholder = `${tmp}`;
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

var slider_img = document.querySelector(".slider img");
window.addEventListener("scroll", () => {
    var val = window.scrollY;
    slider_img.style = `transform:translateY(${val*0.3}px)`
})

// slider.
// light:
    var html = document.querySelector("html");
    var light_btn = document.getElementById("light__btn");
    var header = document.querySelector(".header__nav");
    function lightOff() {
        var products = document.querySelectorAll(".content__box__item");
        html.classList.toggle("dark");
        header.classList.toggle("header__nav-dark");
        products.forEach((product) => {
            product.classList.toggle("light");
        })
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
    {anh:"./assets/img/book13.png", ten: "sach 13", gia: 6012000},
    {anh:"./assets/img/book14.png", ten: "sach 14", gia: 6012000},
    {anh:"./assets/img/book15.png", ten: "sach 15", gia: 6012000},
    {anh:"./assets/img/book16.png", ten: "sach 16", gia: 6012000},
    {anh:"./assets/img/book17.png", ten: "sach 17", gia: 6012000},
    {anh:"./assets/img/book18.png", ten: "sach 18", gia: 6012000},
    {anh:"./assets/img/book19.png", ten: "sach 19", gia: 6012000},
    {anh:"./assets/img/book20.png", ten: "sach 20", gia: 6012000},
]
var currentPage = 1;
var perPage = 6 ;
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
    for (var i = begin ; i < end ; i++) {
        if (i >= products.length)
            return;
        var sp = document.createElement("div");
        sp.classList.add("content__box__item");

        sp.innerHTML = `
            <img src=${products[i].anh} alt="">
            <div class="content__box__item__note">
                <span>
                    <h3>ten: ${products[i].ten}</h3>
                    <h3>gia: ${products[i].gia}</h3>
                </span>
                <span class="content__box__item__note__add">
                    <i class="fa-solid fa-cart-plus"></i>
                </span>
            </div>

        `
        dssp.appendChild(sp) ; 
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

// sign:

var signIn_btn = document.querySelector(".header__account__btn.signIn");
var signUp_btn = document.querySelector(".header__account__btn.signOut");
var signUp_box = document.querySelector(".sign.signUp");
var signIn_box = document.querySelector(".sign.signIn");
var overlays = document.querySelectorAll(".sign");
var form_signIn = document.getElementsByName("form_signIn")[0];
var form_signUp = document.getElementsByName("form_signUp")[0];

overlays.forEach((overlay) => {
    overlay.onclick = () => {
        document.querySelector(".show-flex").classList.remove("show-flex");
    }
})

signIn_btn.onclick = () => {
    signIn_box.classList.add("show-flex");
}

signUp_btn.onclick = () => {
    signUp_box.classList.add("show-flex");
}

form_signIn.addEventListener("click", (e) => {
    e.stopPropagation();
})

form_signUp.addEventListener("click", (e) => {
    e.stopPropagation();
})

document.addEventListener("keyup", (e) => {
    if (e.keyCode == 27) {
        document.querySelector(".show-flex").classList.remove("show-flex");
    }
})

// check:

var signUp_inps = document.querySelectorAll(".signUp input");

function checkSignUp () {
    if (signUp_inps[0].value == "") {
        alert("Nhập tên tài khoản");
        signUp_inps[0].focus();
        return false;
    } 
    if (signUp_inps[1].value == "") {
        alert("Nhập mật khẩu");
        signUp_inps[1].focus();
        return false;
    } 
    if (signUp_inps[2].value == "") {
        alert("Nhập lại mật khẩu") ; 
        signUp_inps[2].focus();
        return false;
    } 
    if (signUp_inps[1].value != signUp_inps[2].value) {
        alert("Mật khẩu nhập lại không trùng khớp")
        signUp_inps[2].focus();
        return false;
    } 
    return true;
}

var signIn_inps = document.querySelectorAll(".signIn input");

function checkSignIn () {
    if (signIn_inps[0].value == "") {
        alert("Nhập tên tài khoản")
        signIn_inps[0].focus();
        return false;
    }
    if (signIn_inps[1].value == "") {
        alert("Nhập mật khẩu")
        signIn_inps[1].focus();
        return false;
    }
}

// check.

// sign.

document.querySelector(".footer").innerHTML = "<h1>This is footer</h1>"
document.querySelector(".footer").style = "text-align: center";