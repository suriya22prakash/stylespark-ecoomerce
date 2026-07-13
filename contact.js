var menu = document.getElementById("Menu")
var navbar2 = document.getElementById("navbar2")

menu.addEventListener("click", function () {
    navbar2.classList.toggle("active");
})

var name1 = document.getElementById("name1")
var email = document.getElementById("email")
var subject = document.getElementById("subject")
var message = document.getElementById("message")

var err1 = document.getElementById("nameerror")
var err2 = document.getElementById("emailerror")
var err3 = document.getElementById("suberror")
var err4 = document.getElementById("msgerror")

var send = document.getElementById("send")
var msgsent = document.getElementById("msg-sent")

send.addEventListener("click", function (event) {
    event.preventDefault()

    var namereg = /^[a-zA-Z]+$/
    var emailreg = /^[a-zA-Z0-9]+@gmail\.com$/
    var number = /^\d{10}$/
    var msgreg = /^[a-zA-Z][a-zA-Z0-9\s]*[a-zA-Z]$/

    var validate = true

    // Name Validation
    if (!namereg.test(name1.value)) {
        err1.style.display = "inline"
        validate = false
    } else {
        err1.style.display = "none"
    }

    // Email Validation
    if (!emailreg.test(email.value)) {
        err2.style.display = "inline"
        validate = false
    } else {
        err2.style.display = "none"
    }

    // Subject Validation (10 digits)
    if (!number.test(subject.value)) {
        err3.style.display = "inline"
        validate = false
    } else {
        err3.style.display = "none"
    }

    // Message Validation
    if (!msgreg.test(message.value)) {
        err4.style.display = "inline"
        validate = false
    } else {
        err4.style.display = "none"
    }

    // Show Success Message
     if (validate) {
        msgsent.style.display = "inline"

        // Clear form fields
        name1.value = ""
        email.value = ""
        subject.value = ""
        message.value = ""

        // Hide success message after 5 seconds
        setTimeout(function () {
            msgsent.style.display = "none"
        }, 2000)

    } else {
        msgsent.style.display = "none"
    }
})


