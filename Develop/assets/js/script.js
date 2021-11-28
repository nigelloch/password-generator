// Assignment code here

var characterCount = document.getElementById('characterCount')
var characterRange = document.getElementById('characterRange')
var characterUppercase = document.getElementById('characterUppercase')
var characterLowercase = document.getElementById('characterLowercase')
var characterNumbers = document.getElementById('characterNumbers')
var characterSymbols = document.getElementById('characterSymbols')

var uppercaseCharcodes = LowToHigh(65, 90)
var lowecarseCharcodes = LowToHigh(97, 122)
var numberCharcodes = LowToHigh(48,57)
var symbolCharcodes = LowToHigh(33, 47).concat(LowToHigh(58, 64))
.concat(LowToHigh(91, 96))
.concat(LowToHigh(123, 126))


var randomstring = Math.random().toString(36).slice(-12);
console.log(randomstring);
        


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword(chara)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
