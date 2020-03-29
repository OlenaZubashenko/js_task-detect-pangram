'use strict';

/**
 * Implement detectPangram function:
 *
 * A pangram is a sentence that contains every single letter of the alphabet
 * at least once. For example, the sentence "The quick brown fox jumps over
 * the lazy dog" is a pangram, because it uses the letters A-Z at least once
 * (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it
 * is, False if not. Ignore numbers and punctuation.
 *
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  const phraseToLower = phrase.toLowerCase();
  let count = 0;
  const allLetters = 'abcdefghijklmnopqrstuvwxyz';

  if (phrase.length === 0) {
    return false;
  }

  for (let i = 0; i < allLetters.length; i++) {
    if (phraseToLower.includes(allLetters[i])) {
      count++;
    }
  }

  return count === allLetters.length;
}

module.exports = detectPangram;
