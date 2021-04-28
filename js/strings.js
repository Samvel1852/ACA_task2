//Uppercase the first character
//importance: 5
//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

function icFirst() {
  return str[0].toUpperCase() + str.slice(1);
} //this will get the first character in uppercase and then will add else.

//Check for spam
//importance: 5
//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
//
//The function must be case-insensitive:

function checkSpam(string) {
  return (
    string.toLowerCase().includes("viagra") ||
    string.toLowerCase().includes("xxx")
  );
} // this will check for it

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;

//Truncate the text
//importance: 5
//Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
//
//The result of the function should be the truncated (if needed) string.
//
//For instance:

function truncate(string, maxl) {
  if (string.length > maxl) {
    return string.slice(0, maxl - 1) + "…";
  } else {
    return string;
  }
}

//Extract the money
//importance: 4
//We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
//
//Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(string) {
  return +string.slice(1);
} //Have been done finally
