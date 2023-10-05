var numberError = document.getElementById('number-error');
var newpasswordError= document.getElementById('newpassword-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');
var passwordmismatch = document.getElementById('mismatch');


function validateNumber(){
  var number = document.getElementById('number').value; 
  
  
  if(number.length==0){
    numberError.innerHTML='Phone number is required';
    return false;
  }
    if(number.length!==10){
        numberError.innerHTML='Phone number should be 10 digits';
        return false;
  }
  if(!number.match(/^[0-9]{10}$/)){
    numberError.innerHTML='Invalid Input';
    return false;
  }
  numberError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;
}
function validatePassword(){
    var password = document.getElementById('code').value; 
  
  
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
function validateNewPassword(){
    var newpassword = document.getElementById('ncode').value; 
  
  
  if(newpassword.length==0){
    newpasswordError.innerHTML='Password is required';
    return false;
  }
    if(newpassword.length<=7){
        newpasswordError.innerHTML='Password should be at least 8 characters';
        return false;
  }
  if(document.getElementById('code').value!==document.getElementById('ncode').value){
    passwordmismatch.style.display= 'block';
    passwordmismatch.innerHTML='Password does not match';
    setTimeout(function(){passwordmismatch.style.display='none';},5000);
    return false;
}
 
  newpasswordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateForm(){
    
    
if(!validateNumber()&& !validatePassword()){
    submitError.style.display= 'block';
    submitError.innerHTML='Please provide all necessary data';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
}
else if(!validateNumber() || !validatePassword()){
  submitError.style.display= 'block';
  submitError.innerHTML='Please provide all necessary data';
  setTimeout(function(){submitError.style.display='none';},3000);
  return false;
}

}