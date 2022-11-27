// Try and put something that says when press generate with no tick, please click checkbox
const password = document.querySelector("#password");
const amount = document.querySelector("#range.amount");
// const passwordLength = document.querySelector("#passLength");
const addLowerCase = document.querySelector("#lowercase");
const addUpperCase = document.querySelector("#uppercase");
const addNumerical = document.querySelector("#numerical");
const addSpecialCharacter = document.querySelector("#special-char");
const generateButton = document.querySelector("#generate");
const copyClip = document.querySelector("#copy");

// // // Listening for Password Change
// amount.addEventListener("change", (event) => {
//   // passwordLength.innerText = event.target.value;
// });

// Listening for Copy to Clipboard
copyClip.addEventListener("click", () => {
  copy(password.value);
});

generateButton.addEventListener("click", () => {
  const amount = amount.value;
  const upperCase = addUpperCase.checked;
  const lowerCase = addLowerCase.checked;
  const numerical = addNumerical.checked;
  const specialCharacter = addSpecialCharacter.checked;
  password.value = generatePassword(upperCase, lowerCase, numerical, specialCharacter, amount);
  // Add amount above ^
});

// Add amount below
function generatePassword(upperCase, lowerCase, numerical, specialCharacter){
  let generatedPassword = "";
  let variationsCount = [upperCase, lowerCase, numerical, specialCharacter].length;

  for (let i = 0; i < length; i += variationsCount) {
    if (upperCase) {
      generatedPassword += getRandomUpperCase();
    }
    if (lowerCase) {
      generatedPassword += getRandomLowerCase();
    }
    if (numerical) {
      generatedPassword += getRandomNumeral();
    }
      generatedPassword += getRandomSpecialCharacter();
    }

    const finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
  }

 function getRandomLowerCase () {
  var lowerCasedCharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return lowerCasedCharacter[Math.floor(Math.random()*lowerCasedCharacter.length)]
 }

 function getRandomUpperCase () {
  var upperCasedCharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return upperCasedCharacter[Math.floor(Math.random()*upperCasedCharacter.length)]
 }

 function getRandomNumeral () {
  var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numericCharacter[Math.floor(Math.random()*numericCharacter.length)]
 }

 function getRandomSpecialCharacter () {
  var specialCharacter = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  return specialCharacter[Math.floor(Math.random()*specialCharacter.length)]
 }


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
