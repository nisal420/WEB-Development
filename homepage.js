

//---------------------slide show---------------------------
var slideNo = 1;
showSlides(slideNo);

function slidePlus(n) {
    showSlides((slideNo += n));
}

function currentSlide(n) {
    showSlides((slideNo = n));
}

function showSlides(n) {
    var i;
    var Allslides = document.getElementsByClassName("slides");

    if (n > Allslides.length) {
        slideNo = 1;
    }
    if (n < 1) {
        slideNo = Allslides.length;
    }
    for (i = 0; i < Allslides.length; i++) {
        Allslides[i].style.display = "none";
    }

    Allslides[slideNo - 1].style.display = "block";
}

//------------------------------------------------------------------

// -------------------------------------  Footer  ---------------------------------------------
function signInBtnClicked() {
    var userEmail = document.getElementById("newsletterEmailTextField").value;
    if (userEmail.trim() === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for joining with us.");
    }
}