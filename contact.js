
function check_Alpha(letters){
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(letters.yourname.value) == false){
   alert("Name must be in alphabets only");
   letters.yourname.focus();
   return false;
    }
    if(letters.yourname.value == "_"){
      alert("Name Field cannot be left empty");
      letters.yourname.focus();
      return false;
    }
    return true;
  }

function check_Email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(regex.test(mail)){
      return true;
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
    })
