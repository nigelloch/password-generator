// Assignment code here


var uppercaseCharcodes = LowToHigh(65, 90)
var lowercaseCharcodes = LowToHigh(97, 122)
var numberCharcodes = LowToHigh(48,57)
var symbolCharcodes = LowToHigh(33, 47).concat(LowToHigh(58, 64))
.concat(LowToHigh(91, 96))
.concat(LowToHigh(123, 126))

var confirm;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;


// var randomstring = Math.random().toString(36).slice(-12);
// console.log(randomstring);
        


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  confirm = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128 characters."));

  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Character amount must be between 8 and 128. Try again."));
  
  } else {
    
    confirmNumber = confirm("Contain numbers?");
    confirmSpecialCharacter = confirm("Special characters?");
    confirmUppercase = confirm("Uppercase letters?");
    confirmLowercase = confirm("Lowerase letters?");
  };

  // if statement if nothing is chosen
  if (!confirmSpecialCharacter && confirmNumber 
    && confirmUppercase && confirmLowercase) {
      choices = alert("You must choose a criteria!")
    }
    // if statement using all options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      
      choices = symbolCharcodes.concat(numberCharcodes, lowercaseCharcodes, uppercaseCharcodes);
    }
    // if statment using 3 options
    else if (confirmNumber && confirmSpecialCharacter && confirmUppercase) {
      choices = numberCharcodes.concat(symbolCharcodes, uppercaseCharcodes);
    }
    else if (confirmNumber && confirmSpecialCharacter && confirmLowercase) {
      choices = numberCharcodes.concat(uppercaseCharcodes, lowercaseCharcodes);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numberCharcodes.concat(symbolCharcodes, lowercaseCharcodes);
    }
    else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
      choices = symbolCharcodes.concat(lowercaseCharcodes, uppercaseCharcodes);
    }
    // if statement for 2 choices
    else if (confirmNumber && confirmSpecialCharacter) {
      choices = numberCharcodes.concat(symbolCharcodes);
    }
    else if (confirmNumber && confirmLowercase) {
      choices = numberCharcodes.concat(lowercaseCharcodes);
    }
    else if (confirmUppercase && confirmSpecialCharacter) {
      choices = uppercaseCharcodes.concat(symbolCharcodes);
    }
    else if (confirmNumber && confirmLowercase) {
      choices = numberCharcodes.concat(lowercaseCharcodes);
    }
    else if (confirmNumber && confirmUppercase) {
      choices = numberCharcodes.concat(uppercaseCharcodes);
    }
    // if statement for one option
    else if (confirmNumber) {
      choices = numberCharcodes;
    }
    else if (confirmLowercase) {
      choices = lowercaseCharcodes;
    }
    else if (confirmUppercase) {
      choices = uppercaseCharcodes;
    }
    else if (confirmSpecialCharacter) {
      choices = symbolCharcodes;
    }

    // contains the created password
    var createdPassword = [];

    // randomization of password
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
