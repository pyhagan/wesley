var phoneError = document.getElementById('phone-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');
var loginError = document.getElementById('login-error')

function validatePhone(){
  var phone = document.getElementById('phone').value; 
  
  
  if(phone.length==0){
    phoneError.innerHTML='Phone number is required';
    return false;
  }
    if(phone.length!==10){
        phoneError.innerHTML='Phone number should be 10 digits';
        return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='Invalid Input';
    return false;
  }
  phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validatePassword(){
    var password = document.getElementById('password').value; 
  
  
  if(password.length==0){
    passwordError.innerHTML='Password is required';
    return false;
  }
    if(password.length<=7){
        passwordError.innerHTML='Password should be at least 8 characters';
        return false;
  }
 
  passwordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;
}


function validateForm(){
if(!validatePhone()&& !validatePassword()&& !validateAuthLogin()){
    submitError.style.display= 'block';
    submitError.innerHTML='Please provide all necessary data';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
}

  else if(!validatePhone()|| !validatePassword()|| !validateAuthLogin()){
    submitError.style.display= 'block';
    submitError.innerHTML='Please provide all necessary data';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
}
}
