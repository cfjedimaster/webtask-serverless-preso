//Credit: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-pig-latin/16039
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
	let input = context.body.input;
    let result = '';
    
    //could be a nicer regex
    let words = input.split(' ');
    words.forEach(w => {
        result += translatePigLatin(w) + ' ';
    });
     
	cb(null, { piglatin: result });
};