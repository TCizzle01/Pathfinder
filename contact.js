
function check_Alpha(letters){
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(letters) == false){
   alert("Name must be in alphabet only");
  
   return false;
    }
    if(letters == "_"){
      alert("Name Field cannot be left empty");
      
      return false;
    }
    return true;
  }

function check_Email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(regex.test(mail)){
      
      alert("Congrats! This is a valid Email");
    }
    else{
      alert("This is not a valid email address");
      return false;
    }
    }
    var contactform = document.getElementById ("contact-form")
    contactform.addEventListener ("submit",function(e){
console.log("hi")
      e.preventDefault ()
      var email = document.getElementById ("email")
     check_Email(email.value)
     var name = document.getElementById ("name")
     check_Alpha(name.value)
    })
