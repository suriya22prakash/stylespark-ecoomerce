const slider = document.getElementById("slider");
const images = slider.querySelectorAll("img");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const totalSlides = images.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

var arrival = document.querySelectorAll(".arrival")

arrival.forEach(function (item) {
    item.addEventListener("click", function () {
        window.location.href = "collections.html"
    })
})

var subscribe = document.getElementById("Subscribe")
var msg = document.getElementById("msg")
var sub = document.getElementById("sub-btn")

sub.addEventListener("click", function () {
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (regex.test(subscribe.value)) {
        msg.style.display = "inline";

        setTimeout(function () {
            msg.style.display = "none";
        }, 3000);
    } else {
        msg.style.display = "none";
    }
});

var collection = document.getElementById("collections-btn")

collection.addEventListener("click", function () {
    window.location.href = "collections.html";
})

var collection2 = document.getElementById("btn1")

collection2.addEventListener("click", function () {
    window.location.href = "collections.html";
})

var menu=document.getElementById("Menu")
var navbar2=document.getElementById("navbar2")

menu.addEventListener("click",function(){
    navbar2.classList.toggle("active");
})

var offersoon=document.getElementById("offersoon")
var x=document.getElementById("x")
x.addEventListener("click",function(){
    offersoon.style.display="none"
})
