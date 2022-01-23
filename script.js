// Assignment code here

// DONE - GIVEN I need a new, secure password
// DONE - WHEN I click the button to generate a password
// DONE - THEN I am presented with a series of prompts for password criteria
// DONE - WHEN prompted for password criteria
// DONE - THEN I select which criteria to include in the password
// DONE - WHEN prompted for the length of the password
// DONE - THEN I choose a length of at least 8 characters and no more than 128 characters
// DONE - WHEN asked for character types to include in the password
// DONE - THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// DONE - WHEN I answer each prompt
// DONE - THEN my input should be validated and at least one character type should be selected
// DONE - WHEN all prompts are answered
// DONE - THEN a password is generated that matches the selected criteria
// DONE - WHEN the password is generated
// DONE - THEN the password is either displayed in an alert or written to the page

var upperCase;
var lowerCase;
var numbersQuesadilla;
var specialCharactersTaco;

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "?", ">", "<", "/"];
let numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharactersAndNumbers = specialCharacters.concat(numbers);
let allLetters = upperCaseLetters.concat(lowercaseLetters);

generatePassword = function() {
  generatePopup = parseInt(prompt('How many characters long do you want your password to be? Please enter a numeric value between 8 and 128.'));
  while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
    alert('Please enter a number between 8 and 128');
    generatePopup = parseInt(prompt('How many characters long do you want your password to be? Please enter a numeric value between 8 and 128.'));
  }
  if (generatePopup) {
    upperCase = confirm('Do you want UPPERCASE letters?');
    console.log(upperCase);
    lowerCase = confirm('Do you want lowercase letters?');
    console.log(lowerCase);
    numbersQuesadilla = confirm('Do you want numbers');
    console.log(numbersQuesadilla);
    specialCharactersTaco = confirm('Do you want special characters?');
    console.log(specialCharactersTaco);
  }
  if (!upperCase && !lowerCase && !numbersQuesadilla && !specialCharactersTaco) {
    userSelection = alert("You entered no values, we can't make a password without values!");
  }
  else if (upperCase && lowerCase && numbersQuesadilla && specialCharactersTaco) {
    userSelection = numbers.concat(specialCharacters, lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && lowerCase && numbersQuesadilla) {
    userSelection = numbers.concat(lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && lowerCase && specialCharactersTaco) {
    userSelection = specialCharacters.concat(lowercaseLetters, upperCaseLetters);
  }
  else if (upperCase && numbersQuesadilla && specialCharactersTaco) {
    userSelection = numbers.concat(specialCharacters, upperCaseLetters);
  }
  else if (lowerCase && numbersQuesadilla && specialCharactersTaco) {
    userSelection = numbers.concat(specialCharacters, lowercaseLetters);
  }
  else if (upperCase && lowerCase) {
    userSelection = upperCaseLetters.concat(lowercaseLetters); 
  }
  else if (upperCase && numbersQuesadilla) {
    userSelection = upperCaseLetters.concat(numbers);
  }
  else if (upperCase && specialCharactersTaco) {
    userSelection = upperCaseLetters.concat(specialCharacters);
  }
  else if (numbersQuesadilla && lowerCase) {
    userSelection = numbers.concat(lowercaseLetters);
  }
  else if (specialCharactersTaco && lowerCase) {
    userSelection = specialCharacters.concat(lowercaseLetters);
  }
  else if (specialCharactersTaco && numbersQuesadilla) {
    userSelection = specialCharacters.concat(numbers);
  }
  else if (numbersQuesadilla) {
    userSelection = numbers;
  }
  else if (specialCharactersTaco) {
    userSelection = specialCharacters;
  }
  else if (lowerCase) {
    userSelection = lowercaseLetters;
  }
  else if (upperCase) {
    userSelection = upperCaseLetters;
  }

  let emptyArray = []; //ARRAY FOR CHOOSING RANDOM VARIABLES
  for (let i = 0; i < generatePopup; i++) {
    console.log(userSelection);
    var mermaidSelection = userSelection[Math.floor(Math.random() * userSelection.length)];
    emptyArray.push(mermaidSelection);
  }
  console.log(emptyArray.join(''));
  return (emptyArray.join(''));
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
