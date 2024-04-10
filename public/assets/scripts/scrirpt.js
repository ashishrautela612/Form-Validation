function saveFormData(event) {
  event.preventDefault();
  let myform = document.getElementById("myForm");
  console.log(myform);

  if (validateForm(myform)) {
    let newform = new FormData(document.getElementById("myForm"));
    console.log(newform.keys());
    const jsonData = {};
    for (const [key, value] of newform.entries()) {
      jsonData[key] = value;
    }
    console.log(jsonData);

    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    myform.reset();
    window.location.href = "display.html";

  }
}

function validateForm(form) {
  let isValid = true;
  const firstName = form.querySelector("#fname");
  const lastName = form.querySelector("#lname");
  const username = form.querySelector("#username");
  const email = form.querySelector("#email");
  const password = form.querySelector("#password");
  const phoneNumber = form.querySelector("#phoneNumber");
  const inputAddress = form.querySelector("#inputAddress");
  const inputCity = form.querySelector("#inputCity");
  const inputState = form.querySelector("#inputState");
  const inputZip = form.querySelector("#inputZip");
  const gender = form.querySelector('input[name="gender"]:checked');


  // validate with regex
  // isValid = nameValidator(firstName) && isValid;
  // isValid = nameValidator(lastName) && isValid;
  // isValid = usernameValidator(username) && isValid; is same because we are checking only empty or lenth
  isValid = emailValidator(email) && isValid; //funtion and regex is same because we are checking only empty or lenth
  // isValid = passwordValidator(password) && isValid;
  // isValid = phoneNumberValidator(phoneNumber) && isValid;
  // isValid = zipValidator(inputZip) && isValid;
  // validate with regex end


  // validate with functions

  isValid=nameValidatorFn(firstName) && isValid;
  isValid=nameValidatorFn(lastName) && isValid;
  isValid=usernameValidatorFn(username) && isValid;
  isValid=passwordValidatorFn(password) && isValid;
  isValid=phoneNumberValidatorFn(phoneNumber) && isValid;
  isValid=zipValidatorFn(inputZip) && isValid;


  return isValid;
}

//regex valodation

function nameValidator(field) {
  let val = field.value.trim();
  const nameRegex = /^[a-zA-Z\s]+$/;

  if (val === "") {
    field.classList.add("border-red"); 
    alert(`Please fill the ${field.placeholder}.`);
    return false;
  } else if (!nameRegex.test(val)) {
    field.classList.add("border-red"); 
    alert(`${field.placeholder} can not contain special characters or numbers.`);
    return false;
  } else {
    field.classList.remove("border-red");
    return true;
  }
}

function usernameValidator(field){
  const userRegex = /^[a-zA-Z0-9]{4,10}$/;
  let val=field.value.trim();

  if(val==""){
    field.classList.add("border-red"); 
    let userError=document.getElementById("usernameError");
    userError.innerText="**User Name can'nt be empty";
    userError.classList.add("error")
    return false;
  }
  else if (!userRegex.test(val)) {
    field.classList.add("border-red"); 
    let userError=document.getElementById("usernameError");
    userError.innerText="**User Name can'nt conatin Special Characters";
    userError.classList.add("error")
    return false;
  } else {
    field.classList.remove("border-red");
    return true;
  }

}


function emailValidator(field) {
  const val = field.value;
  const emailError = document.getElementById("emailError");

  if (val === "") {
    field.classList.add("border-red");
    emailError.innerText = "**Email cannot be empty.";
    emailError.classList.add("error");
    return false;
  } else if (val.length > 50) {
    field.classList.add("border-red");
    emailError.innerText = "**Email cannot contain more than 50 characters.";
    emailError.classList.add("error");
    return false;
  } else {
    field.classList.remove("border-red");
    emailError.innerText = "";
    emailError.classList.remove("error");
    return true;
  }
}

function passwordValidator(field){
  let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let val=field.value;
  const passError=document.getElementById("passError");

  if(val==""){
    field.classList.add("border-red");
    alert(`Please fill the ${field.placeholder}.`);
    passError.innerText = "**Password cannot be empty.";
    passError.classList.add("error");
    return false;
  }
  else if(!passRegex.test(val)){
    passError.innerText = "**Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
    passError.classList.add("error");
    return false;
  }
  else{
    field.classList.remove("border-red");
    passError.classList.remove("error");
    passError.innerText = "";
    return true;
  }
}

function phoneNumberValidator(field){
  let val=field.value;
  let phoneError=document.getElementById("phoneError");
  const  phoneregex = /^\d{10}$/;

  if(val==""){
    field.classList.add("border-red");
    alert("Please fill the phone number");
    phoneError.innerText();
    phoneError.classList.add("error");
    return false;
  }
  else if(val.length>10 || val.length<10){
    field.classList.add("border-red");
    phoneError.innerText = "**Phone Number must have only 10 digits.";
    phoneError.classList.add("error");
    return false;
  }
  else if(!phoneregex.test(val)){
    field.classList.add("border-red");
    phoneError.innerText = "**Phone Number can contain only digits.";
    phoneError.classList.add("error");
    return false;
  }
  else{
    field.classList.remove("border-red");
    phoneError.innerText = "";
    phoneError.classList.remove("error");
    return true;
  }
}

function zipValidator(field){
  let val=field.value;
  let zipError=document.getElementById("zipError");
  const zipRegex=/^\d{6}$/;

  if(val==""){
    field.classList.add("border-red");
    alert("Please fill the zip code");
    zipError.innerText="**zip code can'nt be empty";
    zipError.classList.add("error");
    return false;
  }

  else if(!zipRegex.test(val)){
    field.classList.add("border-red");
    zipError.innerText="**zip code can contain only 6 digits";
    zipError.classList.add("error");
    return false;
  }
  else{
    field.classList.remove("border-red");
    zipError.innerText="";
    zipError.classList.remove("error");
    return true
  }
}
//regex validation ends



//function validation

function nameValidatorFn(field) {
  let val = field.value.trim();
  let flag = true;


  if(val==""){
    field.classList.add("border-red"); 
    alert(`Please fill the ${field.placeholder}.`);
    return false;
  }

  for (let i = 0; i < val.length; i++) {
    if ((val[i] >= 'a' && val[i] <= 'z') || (val[i] >= 'A' && val[i] <= 'Z')) {
      flag = true;
    } else {
      field.classList.add("border-red"); 
      alert(`${field.placeholder} can not contain special characters or numbers.`);
      flag = false;
      return flag;
    }
  }

  return flag;
}

function usernameValidatorFn(field){
  let val=field.value.trim();
  let flag=true;
  if(val==""){
    field.classList.add("border-red"); 
    let userError=document.getElementById("usernameError");
    userError.innerText="**User Name can'nt be empty";
    userError.classList.add("error");
    flag=false;
    return flag;
  }
  for(let i=0;i<val.length;i++){
    if (!((val[i] >= 'a' && val[i] <= 'z') || (val[i] >= 'A' && val[i] <= 'Z') || (val[i] >= '0' && val[i] <= '9'))){
      field.classList.add("border-red"); 
    let userError=document.getElementById("usernameError");
    userError.innerText="**User Name can'nt conatin Special Characters";
    userError.classList.add("error")
      flag=false;
      return flag
    }
  }
  return flag;
}

function passwordValidatorFn(field){
  let val=field.value;
  const passError=document.getElementById("passError");

  if(val==""){
    field.classList.add("border-red");
    alert(`Please fill the ${field.placeholder}.`);
    passError.innerText = "**Password cannot be empty.";
    passError.classList.add("error");
    return false;
  }
  else if(val.length < 8){
    field.classList.add("border-red");
    passError.innerText = "**Password must contain 8 characters.";
    passError.classList.add("error");
    return false;
  }
  let spCounter=0;
  let numCounter=0;
  let upperCounter=0;
  let lowerCounter=0;
  let spCharacters='!@#$%^&*';
  for(let i=0;i<val.length;i++){
    if(val[i] >= 'a' && val[i] <= 'z' ){
      lowerCounter++;
    }
    else if(val[i] >= 'A' && val[i] <= 'Z'){
      upperCounter++;
    }
    else if(!isNaN(parseInt(val[i]))){
      numCounter++;
    }
        else if(spCharacters.includes(val[i])){
          spCounter++;
        }
  }
  if(!spCounter){
    field.classList.add("border-red");
    passError.innerText = "**Password must a special character.";
    passError.classList.add("error");
    return false;
  }
  else if(!numCounter){
    field.classList.add("border-red");
    passError.innerText = "**Password must contain a number.";
    passError.classList.add("error");
    return false;
  }
  else if(!upperCounter){
    field.classList.add("border-red");
    passError.innerText = "**Password must contain a uppercase.";
    passError.classList.add("error");
    return false;
  }
  else if(!lowerCounter){
    field.classList.add("border-red");
    passError.innerText = "**Password must contain a lowercase.";
    passError.classList.add("error");
    return false;
  }
  return true;
}




function phoneNumberValidatorFn(field) {
  const val = field.value.trim();
  const phoneError = document.getElementById("phoneError");

  if (val === "") {
    field.classList.add("border-red");
    phoneError.innerText = "**Please fill in the phone number.";
    phoneError.classList.add("error");
    return false;
  } else if (val.length !== 10 || !containsOnlyNumbers(val)) {
    field.classList.add("border-red");
    phoneError.innerText = "**Phone number should contain only 10 digits.";
    phoneError.classList.add("error");
    return false;
  } else {
    field.classList.remove("border-red");
    phoneError.innerText = "";
    phoneError.classList.remove("error");
    return true;
  }
}
function containsOnlyNumbers(value) {
  for (let i = 0; i < value.length; i++) {
    if (isNaN(parseInt(value[i]))) {
      return false;
    }
  }
  return true; 
}



function zipValidatorFn(field){
  let val=field.value;
  let zipError=document.getElementById("zipError");
  if(val==""){
    field.classList.add("border-red");
    alert("Please fill the zip code");
    zipError.innerText="**zip code can'nt be empty";
    zipError.classList.add("error");
    return false;
  }

  else if(val.length!=6 || !containsOnlyNumbers(val) ){
    zipError.innerText="**zip code can contain only 6 digits";
    zipError.classList.add("error");
    return false;
  }
  else{
    field.classList.remove("border-red");
    zipError.innerText="";
    zipError.classList.remove("error");
    return true
  }
}
 


 