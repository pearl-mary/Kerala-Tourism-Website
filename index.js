//Login Form validation//

//basic validation//

let email = document.getElementById("email");
let error =document.getElementById("error");
let password = document.getElementById("password");

function emailValidate(){
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(.{a-z}{2,4})?$/;
if (regexp.test(email.value)){
    error.innerText ="Valid";
    error.style.color ="green";
    return true;
}
else{
    error.innerHTML ="Invalid";
    error.style.color ="red";
    return false;
}

}  
/*password validations*/

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  if(myInput.value.length >= 15) {
    return false;
  } 
  
}

//login form validation end here//
/*password validations*/
function validate_password() {
 
  var pass = document.getElementById('pass').value;
  var confirm_pass = document.getElementById('confirm_pass').value;
  if (pass != confirm_pass) {
      document.getElementById('wrong_pass_alert').style.color = 'red';
      document.getElementById('wrong_pass_alert').innerHTML
        = '☒ Use same password';
      document.getElementById('create').disabled = true;
      document.getElementById('create').style.opacity = (0.4);
  } else {
      document.getElementById('wrong_pass_alert').style.color = 'green';
      document.getElementById('wrong_pass_alert').innerHTML =
          '🗹 Password Matched';
      document.getElementById('create').disabled = false;
      document.getElementById('create').style.opacity = (1);
  }
}

function wrong_pass_alert() {
  if (document.getElementById('pass').value != "" &&
      document.getElementById('confirm_pass').value != "") {
      alert("Your response is submitted");
  } else {
      alert("Please fill all the fields");
  }
}


//Signup form validations

  

