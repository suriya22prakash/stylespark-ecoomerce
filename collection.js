var search=document.getElementById("collectionsearch")
var s1=document.getElementById("input1")
var filter1=document.querySelector("filter-con")
var category=document.getElementsByName("filter")
var productcon=document.getElementById("filter-s2")
var productlists=productcon.querySelectorAll("div")
console.log(productlists)

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    console.log(entervalue)

    for (count = 0; count < productlists.length; count = count + 1) {
        productname = productlists[count].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlists[count].style.display = "none"
        }
        else {
            productlists[count].style.display = "block"
        }

    }
})

category.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        var checkedValues = []
        category.forEach(function (cb) {
            if (cb.checked) {
                checkedValues.push(cb.value.toUpperCase())
            }
        })

        for (var count = 0; count < productlists.length; count++) {
            var genderText = productlists[count].querySelector(".gender").textContent.toUpperCase()

            if (checkedValues.length === 0 || checkedValues.indexOf(genderText) > -1) {
                productlists[count].style.display = "block"
            } else {
                productlists[count].style.display = "none"
            }
        }
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

var menu=document.getElementById("Menu")
var navbar2=document.getElementById("navbar2")

menu.addEventListener("click",function(){
    navbar2.classList.toggle("active");
})