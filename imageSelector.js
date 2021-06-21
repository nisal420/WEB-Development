// -------------------------------- Image Selector -------------------------------------
function removeItem(list, item) {
    let index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
    }
    return list;
}

function display(eventNumber) {
    // Remove 'disable' class from displayContainer, thereby removing the 'display: none' css value.
    let displayContainer = document.getElementById('displayContainer')
    displayContainer.className = "container"

    // Remove 'disable' class from tour-details, thereby removing the 'display: none' css value, and displaying
    // the details according to each thumbnail selected
    let eventID = document.getElementById(`event-${eventNumber}`);
    eventID.className = "tour-details";

    // Hide all non-selected tour details and larger image
    let eventList = ['1', '2', '3', '4', '5'];
    eventList = removeItem(eventList, eventNumber);

    for (let i = 0; i < eventList.length; i++) {
        let otherEventID = document.getElementById(`event-${eventList[i]}`);
        otherEventID.className = "tour-details disabled";
    }

    // Scroll a certain number of pixels down when the user selects a thumbnail, so that the selected thumbnail
    // is shown with the relevant information
    window.scrollTo(0, 700);
}


// ------------------ Background Color Picker ---------------------------
function changeBodyBg(color){
    document.body.style.background = color;
}

// ------------------ Background Color Picker ---------------------------
function changeTextColor(color) {
    var title = document.getElementById("title");
    title.style.color = color;

    var containerHeaders = document.getElementsByClassName("container-title");
    for (var j = 0; j < containerHeaders.length; j++ ) {
        containerHeaders[j].style.color = color;
    }

    var captions = document.getElementsByClassName("caption");
    for (var k = 0; k < captions.length; k++ ) {
        captions[k].style.color = color;
    }

    var labels = document.getElementsByClassName("form-label");
    for (var i = 0; i < labels.length; i++ ) {
        labels[i].style.color = color;
    }

    var textfields = document.getElementsByClassName("form-text-field");
    for (var l = 0; l < textfields.length; l++ ) {
        textfields[l].style.color = color;
        textfields[l].style.fontWeight = "bold";
    }

    var selectedTourTitle = document.getElementsByClassName("selected-image-title");
    for (var m = 0; m < selectedTourTitle.length; m++ ) {
        selectedTourTitle[m].style.color = color;
    }

    var selectedTourSubTitle = document.getElementsByClassName("subtitle");
    for (var z = 0; z < selectedTourSubTitle.length; z++ ) {
        selectedTourSubTitle[z].style.color = color;
    }

    var selectedTourDescription = document.getElementsByClassName("tour-description");
    for (var x = 0; x < selectedTourDescription.length; x++ ) {
        selectedTourDescription[x].style.color = color;
    }
}

// -------------------------------------  Footer  ---------------------------------------------
function signInBtnClicked() {
    var userEmail = document.getElementById("newsletterEmailTextField").value;
    if (userEmail.trim() === "") {
        alert("Please enter your email.");
    } else {
        alert("Thank you for joining with us.");
    }
}

// ----------------------------------- Form Validation ----------------------------------------
function formValidate() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var postalCode = document.getElementById("postalCode").value;
    var cardNo = document.getElementById("cardNum").value;
    var expDate = document.getElementById("expDate").value;
    var cvv = document.getElementById("cvvCode").value;

    // Regular Expression to validate credit card number
    var creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    var cardIsValid = false;


    cardNo = cardNo.replace(/\D/g,''); // Strip all non-numeric values from string entered by user

    // If any of the fields are empty, show alert.
    if (firstName === "" || lastName === "" || email === "" || address === "" || address2 === "" || city === "" ||
        postalCode === "" || cardNo === "" || expDate === "" || cvv === "" ) {
        alert("Empty fields in form. Please fill in all fields.");
        return false;
    }

    // Validate postal code
    if (postalCode.length !== 5 || isNaN(postalCode)) {
        alert("Invalid postal code.");
        return false;
    }

    // Validate Credit Card No using RegEx
    if (creditCardRegex.test(cardNo)) {
        cardIsValid = true;
    } else {
        cardIsValid = false;
    }

    // Validate cvv code
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Invalid CVV Code")
        return false;
    }

    if (cardIsValid) { // If card is valid, submit form
        alert("Order completed")
        return true;
    } else { // Else, show alert
        alert("Invalid Credit Card Number.");
        return false;
    }
}















