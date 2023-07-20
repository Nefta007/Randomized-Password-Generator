// Assignment code here
var numPass = [0,1,2,3,4,5,6,7,8,9];
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var charForPassword = []; //will hold the characters 
var randomPassword = []; // will hold the randomized password
var finalPassword = []; //this will hold the final password in the form of an array 
var stringPassword; //this will hold the final password in string form where there won't be any commas in the final product
//if button is clicked to generate password
//prompts for password criteria are presented and user selects
//promp for password length is shown
//make sure that length of password is more than 8 and less than 128
//prompt for character types, lower case, uppercase, numeric and or special characters
//validate the users choice, and a character 
//password should be written to page


//console log will be used to verify result and make corrections

function generatePassword(){
  alert("Criteria will be shown shortly please type how long you would like your password. Also please use y for yes and n for no"); // alerts display messages to the website after occurs
  
  //this while loop will make sure that the value of the length meets the minimum and maximum requirement
  var passLength = prompt("How long would you like the password to be (has to be longer than 8 character and shorter than 128 characters)");
  while(passLength < 8 || passLength>128){
    alert("Please make sure that your password is at  least 8 characters long and at most is 128 characters long");
    var passLength = prompt("How long would you like the password to be (has to be longer than 8 character and shorter than 128 characters)");
  }
  console.log(passLength);
  alert("Your password will be " + passLength + " characters long");

  //this will show a message for numbers inclusion as well as show a special message based on what user desires
  var numMess = prompt("Would you like to include numbers in your password?");
  if(numMess ==='y'){
    charForPassword = charForPassword.concat(numPass);
    alert("You have chosen to add numbers to your password")
    console.log(charForPassword);
  }
  else if(numMess === 'n'){
    alert("You have chosen not to add numbers to your password");
  }

  //same as above but for lower case letters
  var lowerMess = prompt("Would you like to include lower case letters in you password?");
  if(lowerMess === 'y'){
    charForPassword = charForPassword.concat(lowerLetters);
    alert("You have chosen to add lower case letters to your password")
    console.log(charForPassword);
  }
  else if(lowerMess === 'n'){
    alert("You have chosen not to add lower case letters to your password");
  }

  //check if user wants upper case letters in their password
  var upperMess = prompt("Would you like to include upper case letters in your password?");
  if(upperMess==='y'){
    charForPassword = charForPassword.concat(upperLetters);
    alert("You have chosen to add upper case letters to your password");
    console.log(charForPassword);
  }
  else if(upperMess === 'n'){
    alert("You have to chosen not to add upper case letters to your password");
  }

  //checks if user wants special characters in their password
  var specialMess = prompt("would you like to inlcude special characters in your password?");
  if(specialMess === 'y'){
    charForPassword = charForPassword.concat(specialChar);
    alert("You have chosen to add special characters to your password");
    console.log(charForPassword);
  }
  else if(specialMess === 'n'){
    alert("You have chosen to not add special characters to your password");
  }

  //this will check if at least one criteria was selected if none were chosen then it will call the function again until one criteria is chosen
  if(numMess === 'n' && lowerMess === 'n' && upperMess === 'n' && specialMess === 'n'){
    alert("You must choose at least one criteria");
    generatePassword();
  }

  //for loop will iterate through the length the user inputs 
  for (var i = 0; i < passLength; i++){
    var randomPassword = charForPassword[Math.floor(Math.random() * charForPassword.length)]; // this will randomly select characters from our array created from the user input and put it into random password
    finalPassword.push(randomPassword); // this will push the values into another array this is done so we can have all characters in one string and not separate
    console.log(finalPassword); 
  }
  stringPassword = finalPassword.join(""); // the join method is used to get rid of the commas from an array, whatever goes inside the ("") is what replaces the (,) in the string
  console.log(stringPassword);
  return stringPassword; // returns our final password so that it is displayed on the website
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