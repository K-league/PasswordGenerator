// Assignment Code
var generateBtn = document.querySelector("#generate");
//Prompts
function generatePassword() {
  // ask user for password length
  var passwordLength = prompt("Please enter a passowrd length between 8 - 128 characters.")
    // conditional statement: if password lenght is not between 8 and 128 retun invalid alert
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid character count.")
    };
    // conditional statement: if password is not a number, alert user to enter valid number
    if (isNaN(passwordLength)) {
      alert("Please enter a valid number.")
    };
    // ask user if they want lowercase letters in their password
  var passwordLowercase = confirm("Click OK to include lowercase letters in your password.");
   // ask user if they want uppercase letters in their password
  var passwordUppercase = confirm("Click OK to include uppercase letters in your password.");
   //ask user if they want numerics in their password
  var passwordNumeric = confirm("Click OK to include numbers in your password.");
  // ask user if they want characters in their password
  var passwordSpeccharacters= confirm("Click OK to include special characters in your password.");

  //Array of lowercase characters
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //Array of uppercase characters
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //Array of numeric characters
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Array of special characters
  var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "|"];

  var selectedCharacters = [];
  // start empty array to be built
  // add lower case characters to array if user selected lowercase in confirm
  if(passwordLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercase)
  }
  //add uppercase characters to array if user selected uppercase in confrim
  if(passwordUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercase)
  }
  //add numeric chracters to array if user selected numeric in confrim
  if(passwordNumeric) {
    selectedCharacters = selectedCharacters.concat(numeric)
  }
  //add special character if user selected special character in confirm
  if(passwordSpeccharacters) {
    selectedCharacters = selectedCharacters.concat(specialCharacters)
  }
  //alert user if no options selected
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