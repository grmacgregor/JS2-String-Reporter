var word = prompt("Enter any word you want!");
var length = word.length;
var lower = word.toLowerCase();
var upper = word.toUpperCase();
var sub = word.substring(1, 4);
alert(
    "hmmmm so you entered: " +
    "'" + word + "'" + " That's a good word!\n" + "There are " + length +
    " chars in that word.\n" + "The third character is "  + "'" + word.charAt(2) +
    "'.\n" + "Lower Case: " + lower + "\n" + "Upper Case: " +
    upper + "\n" + "Example: I totally love that you entered " + word +
    " so quickly!\n" + "Subword: " + sub
);
