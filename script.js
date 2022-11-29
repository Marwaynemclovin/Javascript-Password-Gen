var lowerCasedCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacter = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var passwordOutput = document.querySelector("#password");

function generatePassword()
{
  // Checks for Checkboxes
  var boxesChecked = [].concat(
    lowercase.checked ? lowerCasedCharacter : [],
    uppercase.checked ? upperCasedCharacter : [],
    numerical.checked ? numericCharacter : [],
    special_character.checked ? specialCharacter : []
  );
  var length = parseInt(document.querySelector("#length").value);
  
  var finalPassword = "";

  // If no checkboxes are slected
  if (boxesChecked.length === 0)
  {
    passwordOutput.innerHTML = "Please select from Checkboxes below.";
    return;
  }

  // Password Length Between Display
  // if (length < 8 && length > 128)
  // {
  //   passwordOutput.innerHTML = "Please select number between 8 & 128."
  // }

  // Code for generating random password
  for (var i = 0; i < length; i++)
  {
    finalPassword += boxesChecked[Math.floor(Math.random() * boxesChecked.length)];
  }
  passwordOutput.value = finalPassword;
}