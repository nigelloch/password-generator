// Assignment code here


var uppercaseCharcodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseCharcodes = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberCharcodes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolCharcodes = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var confirmation;

var selection;
      


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("createdPassword").placeholder = pass;
});


function generatePassword() {

  confirmation = parseInt(prompt("How many characters would you like your password to be? It must be between 8 and 128 characters."));

  if (!confirmation) {
    alert("Please enter a value");
  } else if (confirmation < 8 || confirmation > 128) {
    
    confirmation = parseInt(prompt("Character amount must be between 8 and 128. Try again."));
  
  } else {
    
    
    confirmUppercase = confirm("Uppercase letters?");
    confirmLowercase = confirm("Lowerase letters?");
    confirmNumber = confirm("Contain numbers?");
    confirmSpecialCharacter = confirm("Special characters?");
  };

  // if nothing is chosen
  if (!confirmSpecialCharacter && confirmNumber 
    && confirmUppercase && confirmLowercase) {
      selection = alert("You must choose a criteria!")
    }
    // if using all options
    else if (confirmSpecialCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      
      selection = symbolCharcodes.concat(numberCharcodes, lowercaseCharcodes, uppercaseCharcodes);
    }
    // if using 3 options
    else if (confirmNumber && confirmSpecialCharacter && confirmUppercase) {
      selection = numberCharcodes.concat(symbolCharcodes, uppercaseCharcodes);
    }
    else if (confirmNumber && confirmSpecialCharacter && confirmLowercase) {
      selection = numberCharcodes.concat(uppercaseCharcodes, lowercaseCharcodes);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
      selection = numberCharcodes.concat(symbolCharcodes, lowercaseCharcodes);
    }
    else if (confirmSpecialCharacter && confirmLowercase && confirmUppercase) {
      selection = symbolCharcodes.concat(lowercaseCharcodes, uppercaseCharcodes);
    }
    // if using 2 options
    else if (confirmNumber && confirmSpecialCharacter) {
      selection = numberCharcodes.concat(symbolCharcodes);
    }
    else if (confirmLowercase && confirmSpecialCharacter) {
      selection = lowercaseCharcodes.concat(symbolCharcodes);
    }
    else if (confirmNumber && confirmLowercase) {
      selection = numberCharcodes.concat(lowercaseCharcodes);
    }
    else if (confirmUppercase && confirmSpecialCharacter) {
      selection = uppercaseCharcodes.concat(symbolCharcodes);
    }
    else if (confirmNumber && confirmLowercase) {
      selection = numberCharcodes.concat(lowercaseCharcodes);
    }
    else if (confirmNumber && confirmUppercase) {
      selection = numberCharcodes.concat(uppercaseCharcodes);
    }
    // if using one option
    else if (confirmNumber) {
      selection = numberCharcodes;
    }
    else if (confirmLowercase) {
      selection = lowercaseCharcodes;
    }
    else if (confirmUppercase) {
      selection = uppercaseCharcodes;
    }
    else if (confirmSpecialCharacter) {
      selection = symbolCharcodes;
    }

    // contains the created password
    var createdPassword = [];

    // randomization of password
    for (let i = 0; i < confirmation; i++) {
      var varSelection = selection[Math.floor(Math.random() * selection.length)]
      createdPassword.push(varSelection);
    }
    var pass = createdPassword.join("");
    UserInput(pass);
    return pass;
}


function UserInput(pass) {
  document.getElementById("createdPassword").textContent = pass;


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



get.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementById("createdPassword").placeholder = pass;
});

}