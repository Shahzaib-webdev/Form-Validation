function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#Submit").click(function(){


    var missingFields = "";
    var errorMessage = "";


    // checking if any field is empty


    if ($("#email").val() == ""){
        missingFields += "<br>Email";
    }

    if ($("#Phone").val() == ""){
        missingFields += "<br>Phone";
    }



    if (missingFields != ""){
        errorMessage += "Following fields are missing" + missingFields;
    }



    // checking if email is valid

    if (isEmail($("#email").val()) == false){
        
        errorMessage += "<p>Enter a valid Email.</p>";
    }


    // checking if phone is valid

    if (($.isNumeric($("#Phone").val())) == false){

        errorMessage += "<p>Enter a valid Phone Number</p>";
    }




    if ($("#Password").val() === $("#confirmPassword").val()){
        if($("#Password").val() === "" || $("#confirmPassword").val() === "" ){
            errorMessage += "<br> Passwords can not be empty";
        }
    }

    else{
        errorMessage += "<br>Passwords are incorrect";
    }

    if(errorMessage != ""){
        $("#errorMessage").html(errorMessage);
    }
    else {
        $("#Submitted").show();
        $("#errorMessage").hide();
        
    }
    
});

