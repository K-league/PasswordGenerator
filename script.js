// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // ask user for password length
  var passwordLength = prompt("Please enter a passowrd length between 8 - 128 characters.")
  // if password lenght is not between 8 and 128 retun invalid alert
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid character count.")
    };
    // ask user if they want lowercase letters in their password
  var passwordLowercase = confirm("Do you want lowercase letters in your password?");
   // ask user if they want uppercase letters in their password
  var passwordUppercase = confirm("Do you want uppercase letters in your password?");
   //ask user if they want numerics in their password
  var passwordNumeric = confirm("Do you want numbers in your password?");
  // ask user if they want characters in their password
  var passwordSpeccharacters= confirm("Do you want special characters in your password?");

  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "|"];

  var selectedCharacters = [];
  // start empty array to be built
  // add lower case characters to array if user selected lowercase
  if(passwordLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercase)
  }
  if(passwordUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercase)
  }
  if(passwordNumeric) {
    selectedCharacters = selectedCharacters.concat(numeric)
  }
  if(passwordSpeccharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters)
  }

  if(selectedCharacters.length == 0){
    alert("no options selected");
  }
  var result = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    result = result + selectedCharacters[randomIndex]
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

