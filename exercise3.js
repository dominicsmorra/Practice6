function validate(){
    //checks the username
    if(document.getElementById("user").value == ""){
        alert("Please enter your username");
    }
    //checks the phone number
    if (document.getElementById("phone").value == "")
        alert("Please enter your phone");
    //checks if there is a password
    if(document.getElementById("pass").value == ""){
        alert("Please enter your password");
    } 
    //checks password length
    length = document.getElementById("pass").length
    if(length > 5 && length < 21){
        alert("Please enter a password of length between 6 and 20"); 
    }
    
}

    