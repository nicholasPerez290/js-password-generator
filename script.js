// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = [1,2,3,4,5,6,7,8,9,0];
var special = ['!','@','#','$','%','^','&','*','?','=','+'];

var generatePassword = function (length,isUpper,isLower,isNumeric,isSpecial) {
  var characters = [];
  var passwordAry = []
  if(isUpper){
    
    characters = characters.concat(upper);
    console.log(characters);
  }else {}

  if(isLower){
    characters = characters.concat(lower);
    console.log(characters);
  }else{}

  if(isNumeric){
    characters = characters.concat(numeric);
    console.log(characters);
  }else{}

  if(isSpecial){
    characters = characters.concat(special);
    console.log(characters);
  }else{}
  for(var i = 0; i < length; i++){
   var index = Math.floor(Math.random()*characters.length)
   console.log(index);
   console.log(characters[index])
   var char = characters[index]
   passwordAry.push(char)
  }
  console.log(passwordAry);
  var passwordStrg = passwordAry.join('');
  return passwordStrg;
 }


// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters in your password?");
  if(passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  }
  else {
    alert("Must be between 8 and 128. Try again.");
    writePassword();
    return;
  }
  
  var passwordIsUpper = confirm("Do you want uppercase characters?");
  console.log(passwordIsUpper);
  var passwordIsLower = confirm("Do you want lowercase characters?");
  console.log(passwordIsLower);
  var passwordIsNumeric = confirm("Do you want numbers?");
  console.log(passwordIsNumeric);
  var passwordIsSpecial = confirm("Do you want special characters?");
  console.log(passwordIsSpecial);

  var password = generatePassword(passwordLength, passwordIsUpper,passwordIsLower,passwordIsNumeric,passwordIsSpecial);
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);