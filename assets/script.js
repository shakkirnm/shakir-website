function nameValidation(){
    var name=document.getElementById("nameText").value
    var nameSpan=document.getElementById("nameSpan");
    var letters = /^[a-zA-Z\s]*$/;
    if(name==""){
        nameSpan.innerHTML="Filed is required"
        return false;
    }
    else if(name.match(letters)){
        nameSpan.innerHTML="";
        return true;
    }
    else{
        nameSpan.innerHTML="Use only charactors" ;
        return false;
    }
}

function emailValidation(){
    var email=document.getElementById("emailText").value
    var emailSpan=document.getElementById("emailSpan");
    var letters =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        emailSpan.innerHTML="Filed is required"
        return false;
    }
    else if(email.match(letters)){
        emailSpan.innerHTML="";
        return true;
    }else{
        emailSpan.innerHTML="Enter valid e-mail"
        return false;
    }
}

function mobileValidation(){
    var mobile=document.getElementById("mobileText").value
    var mobileSpan=document.getElementById("mobileSpan")
    var letters=/^\d{10}$/;
    if(mobile==""){
        mobileSpan.innerHTML="Filed is required"
        return false;
    }
    else if(mobile.match(letters)){
        mobileSpan.innerHTML=""
        return true;
    }else{
        mobileSpan.innerHTML="Enter valid mobile number"
    }
}

function messageValidation(){
    var message=document.getElementById("messageText").value
    var messageSpan=document.getElementById("messageSpan")
    if(message==""){
        messageSpan.innerHTML="Filed is required"
        return false;
    }
    else if(message.length<20){
        messageSpan.innerHTML="Enter minimum 20 character"
        return false;
    }else{
        messageSpan.innerHTML=""
        return true;
    }

}
