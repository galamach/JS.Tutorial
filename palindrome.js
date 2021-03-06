/// Reverses a string.
// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings.
String.prototype.blank = function() {
  return this.match(/^$/);
}

// Adds `last` to all arrays.
Array.prototype.last = function() {
  return this.slice(-1);
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return this.content;    // stub return value
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
//  return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  }

    // Returns whether content is an empty string or not.
    this.emptiness = function emptiness() {
      return !!this.content.blank();
    }

    // Returns last character of content.
    this.butNotLeast = function butNotLeast() {
      Array.from(this.content).last();
    }
}

// Defines a translated Phrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
