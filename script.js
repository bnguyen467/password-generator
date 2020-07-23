// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generatePassword
function generatePassword() 
{
  // Input length of password and check if they length is in range 
  let checkLength = true;
  let length = 0;

  do{
    length = prompt("Number of character (at least 8 and at most 128): ");
    if(length < 8 || length > 128)
    {
      alert("Invalid number of character! Enter again!");
    }
    else
    {
      checkLength = false;
    }
  }while(checkLength)

  // Ask user for password criteria
  let includeNum = confirm("Include Numbers?");
  let includeUpCase = confirm ("Include Upper Cases");
  let includeSpecChar = confirm("Include Special Character?");
  
  // Password character library
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let specialCharacters = ['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':', '@', '#', '$', '%', '/', '<', '>', '.', ','];

  // Declare and default password to lower case
  let passwordCriteria = lowerCase;
  
  // Push chosen criteria to password
  if(includeUpCase)
  passwordCriteria = passwordCriteria.concat(upperCase);
  
  if(includeNum)
  passwordCriteria = passwordCriteria.concat(numbers);

  if(includeSpecChar)
  passwordCriteria = passwordCriteria.concat(specialCharacters);

  // Password generated into here
  newPassword = [];
  for(let i = 0; i < length; i++)
  {
    let passwordChar = passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    newPassword.push(passwordChar);
  }

  return newPassword;
}