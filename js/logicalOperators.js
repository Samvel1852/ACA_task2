//Task1
//What is the code below going to output?

alert(null || 2 || undefined); //the code will output 2 because the value of
//the first truthy result is 2.

//What will the code below output?

alert(alert(1) || 2 || alert(3)); //this will alert the value added in first alert
//alert function returns undefined which is falsy but it will give only the value of that alert which is truthy.

//What is this code going to show?

alert(1 && null && 2); //this code is going to show null because for the AND operator
//it takes the first falsy value or the last value if falsy doesn't exist there.

//What will this code show?

alert(alert(1) && alert(2)); //This will show alert 1 and then it will show undefined, first it will take the value
//of alert but the alert function returns false, so the && operator stops checking.

//What will the result be?

alert(null || (2 && 3) || 4); //The result will be 3 because the the first part is contains true and will check the
//second part and will return the first truthy value.

//Write an if condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.
let checkAge = 36;
if (checkAge >= 14 && checkAge <= 90) {
  return true;
} //this condition makes to return true if the value of the variable will be in the range inclusively.

//Write an if condition to check that age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, the second one – without it.

if (!(checkAge >= 14 && checkAge <= 90)) {
  return true;
} //this will return true if the checkAge will not be in the range inclusively.
if (checkAge < 14 || checkAge > 90) {
  return true;
} // in this condition also will return true if the checkAge will not be in the range.

//Which of these alerts are going to execute?

//What will the results of the expressions be inside if(...)?

if (-1 || 0) alert("first"); //will alert first because -1 is truthy. Will return true
if (-1 && 0) alert("second"); //will not alert because the 0 is falsy. Will return false
if (null || (-1 && 1)) alert("third"); //will alert third because the second condition is both truthy.

//Check the login
//importance: 3
//Write the code which asks for a login with prompt.
//
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
//
//The password is checked as follows:
//
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
let entered = "Will be entered";
let password = qwerty;
let user = "Admin";
if (password === entered) {
  return alert("You are welcome");
} else {
  if (entered === null || entered === "") {
    return alert("You have not write the password");
  } else {
    return alert("You have written wrong password");
  }
}
