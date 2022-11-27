const password = document.querySelector("#password");
const amount = document.querySelector("#amount");
const passwordLength = document.querySelector("#amount");
const addLowerCase = document.querySelector("#lowercase");
const addUpperCase = document.querySelector("#uppercase");
const addNumerical = document.querySelector("#numerical");
const addSpecialChar = document.querySelector("#special-char");
const generateButton = document.querySelector("#generate");
const copyClip = document.querySelector("#copy");

// Listening for Password Change
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});

// Listening for Copy to Clipboard
copyClip.addEventListener("click", () => {
  copy(result.value);
});

generateButton.addEventListener("click", () => {
  // const length = amount.value;
  const upperCase = addUpperCase;
  const lowerCase = addLowerCase;
  const numbers = addNumerical.checked;
  const symbols = addSpecialChar.checked;
  result.value = generatePassword(upperCase, lowerCase, numbers, symbols);
});

function generatePassword(upperCase, lowerCase, numbers, symbols);
  let generatedPassword="";
  let varationsCount = [upperCase, lowerCase, numbers, symbols].length;

  for (let i = 0; i < length; i += variationsCount) {
    if (upperCase) {
      generatedPassword += getRandomUpperCase();
    }
    if (lowerCase) {
      generatedPassword += getRandomLowerCase();
    }
    if (numerical){
      generatedPassword += getRandomNumber();
    }
    { if (specialChar)
      generatedPassword += getRandomSpecialChar();
    }

    const finalPassword = generatePassword.slice(0, length);
    
    return finalPassword;
  }

 function getRandomLowerCase () {
  var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return lowerCasedCharacters[Math.floor(Math.random()*lowerCasedCharacters.length)]
 }

 function getRandomUpperCase () {
  var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  return upperCasedCharacters[Math.floor(Math.random()*UpperrCasedCharacters.length)]
 }

 function getRandomNumber () {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numericCharacters[Math.floor(Math.random()*numericCharacters.length)]
 }

 function getRandomSpecialChar () {
  var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  return specialCharacters[Math.floor(Math.random()*numericCharacters.length)]
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
