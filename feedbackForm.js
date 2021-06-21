function userFeedback() {
    var firstName = document.getElementById("firstName").value;   //getting all inputs to variables
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;




    while (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Please complete the form. !");//alert for incomplete form
        return false;
    }

    if (document.getElementById("unsatisfied").checked || document.getElementById("satisfied").checked || document.getElementById("verysatisfied").checked) {
        var rate = document.getElementsByName("rating");
        for (var i = 0; i < rate.length; i++) {
            if (rate[i].checked) {
                alert("Dear " + firstName + " " + lastName + ", Thank you very much for your feedback. You have rated our site as " + rate[i].value + " and your message to us was " + message + ".");
            } //user have successfully completed the form
        }
    } else {
        alert("Please complete the form. !");
    }
}

function signInBtnClicked() {
    var userEmail = document.getElementById("newsletterEmailTextField").value;
    if (userEmail.trim() === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for joining with us.");
    }
}
