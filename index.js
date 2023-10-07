function isPalindrome(word) {
  // Write your algorithm here
  function isPalindrome(str) {
    // Remove non-letter characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Compare the cleaned string with its reverse
    return cleanedStr === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("robot")); // false
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("Was it a car or a cat I saw?")); // true
  
}

/* 
  Add your pseudocode here

  Function isPalindrome(str):
  1. Initialize a variable `cleanedStr` to an empty string.
  2. Remove non-letter characters from `str` and convert it to lowercase, then store the result in `cleanedStr`.
  3. Initialize a variable `reversedStr` to an empty string.
  4. Split `cleanedStr` into an array of characters, reverse the array, and join it back into a string, then store the result in `reversedStr`.
  5. If `cleanedStr` is equal to `reversedStr`, return true (indicating that `str` is a palindrome).
  6. Otherwise, return false (indicating that `str` is not a palindrome).

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
