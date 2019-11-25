function validate(){
    if(document.getElementById("user").value == ""){
        alert("Please enter your username");
    }
    if (document.getElementById("phone").value == "")
        alert("Please enter your phone");
    if(document.getElementById("pass").value == ""){
        alert("Please enter your password");
    } 
    length = document.getElementById("pass").length
    if(length > 5 && length < 21){
        alert("Please enter a password of length between 6 and 20"); 
    }
    
}

    