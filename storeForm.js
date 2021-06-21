//Naming variables for each text field
function validate(){
    var name = document.getElementById("name").value;
    var ShippingAddress = document.getElementById("shippingAddress").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("Cnumber").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px"; //for innerhtml text validations

    //Name validation
    var text;
    if(name.length < 5){
        text = "Please Enter the customer's Name";
        error_message.innerHTML = text;
        return false;
    }
    //Shipping address validation
    if(shippingAddress.length === null){
        text = "Please Enter the shipping address";
        error_message.innerHTML = text;
        return false;
    }
    //phone number validation
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    //email validation
    if(email.indexOf("@") == -1 ){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    //card number validation
    if(message.length === 16){
        text = "Please Enter the 16 digits of the card";
        error_message.innerHTML = text;
        return false;
    }

    //order successful alert validation
    alert("Order Submitted Successfully!");
    return true;
}