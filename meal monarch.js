
$(document).on("click", "#loginBtn", function() {
    
    
    $(".error").hide();
    
    var emailVal = $("#loginEmail").val();
    var passVal = $("#loginPassword").val();
    var isValid = true;
    
    if (passVal.length < 4) {
        isValid = false;
        console.log("Password too short"); 
    }
    
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailVal)) {
        isValid = false;
        console.log("Invalid email format"); 
    }
    
    if (isValid) {
        window.location.href = "dashboard.html";
    }
});

$(document).on("click", "#registerBtn", function() {

    
    var nameVal = $("#registerName").val();
    var emailVal = $("#registerEmail").val();
    var passVal = $("#registerPassword").val();
    var isValid = true;
    
    if (nameVal.trim() === "") {
        isValid = false;
        console.log("Name cannot be empty");
        alert("Error: Name cannot be empty!");

    }
    
    var emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailVal)) {
        isValid = false;
        console.log("Invalid email format for registration");
    }
    
    if (passVal.length < 4) {
        isValid = false;
        console.log("Registration password too short");
    }
    
    if (isValid) {
        
        console.log("Registration successful!", nameVal, emailVal, passVal);
        window.location.href = "dashboard.html"; 
    } else {
        console.log("Registration failed due to validation errors.");
        
    }
});
function showPage(pageId) {
    $('.page').removeClass('active');
    $('#' + pageId).addClass('active');
}
