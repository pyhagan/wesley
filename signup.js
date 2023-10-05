var fnameError = document.getElementById('fname-error');
var surnameError = document.getElementById('surname-error');
var dobError = document.getElementById('dob-error');
var phoneError = document.getElementById('phone-error');
var passwordError = document.getElementById('password-error');
var cpasswordError = document.getElementById('cpassword-error');
var submitError = document.getElementById('submit-error');
var radioError = document.getElementById("radio-error")



function validateFname(){
    var fname = document.getElementById('fname').value; 
  
  
    if(fname.length==0){
      fnameError.innerHTML='First name is required';
      return false;
    }
     
    if(!fname.match(/^[A-Za-z]*$/)){
      fnameError.innerHTML='Invalid Input';
      return false;
    }
    fnameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;   
} 
function validateSurname(){
    var surname = document.getElementById('surname').value; 
  
  
    if(surname.length==0){
      surnameError.innerHTML='Surname required';
      return false;
    }
     
    if(!surname.match(/^[A-Za-z]*$/)){
      surnameError.innerHTML='Invalid Input';
      return false;
    }
    surnameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;   
} 
function validateDOB(){
    var dob = document.getElementById('dob').value; 
  
  
    if(dob.length==0){
      dobError.innerHTML='Date of birth required';
      return false;
    }
     
    /*if(!dob.match(/^[0-9]$/)){
      dobError.innerHTML='Invalid Input';
      return false;
    }*/
    dobError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;   
} 


function validateRadio(){
    var male, female;
    if(male.checked==false && female.checked==false){
        radioError.innerHTML='Please select your gender'
   

}
}
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
function validateCPassword(){
    var cpassword = document.getElementById('cpassword').value; 
  
  
  if(cpassword.length==0){
    cpasswordError.innerHTML='Password is required';
    return false;
  }
    if(cpassword.length<=7){
        cpasswordError.innerHTML='Password should be at least 8 characters';
        return false;
  }
  if(document.getElementById('password').value!==document.getElementById('cpassword').value){
    cpasswordError.style.display= 'block';
    cpasswordError.innerHTML='Password does not match';
    setTimeout(function(){cpasswordError.style.display='none';},5000);
    return false;
}

  cpasswordError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
  return true;
}


function validateForm(){
if(!validateFname()&&!validateSurname()&&!validatePhone()&& !validatePassword() &&!validateCPassword()&&!validateRadio){
    submitError.style.display= 'block';
    submitError.innerHTML='Please provide all necessary data';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
}
else if(!validateFname()||!validateSurname()||!validatePhone()|| !validatePassword() ||!validateCPassword()){
    submitError.style.display= 'block';
    submitError.innerHTML='Please provide all necessary data';
    setTimeout(function(){submitError.style.display='none';},3000);
    return false;
}



}
