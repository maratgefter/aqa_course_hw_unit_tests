/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const originalWord = word.toLowerCase();
  const reversed = originalWord.split('').reverse().join('');

return originalWord === reversed || originalWord === ''
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
 if (typeof sentence !== 'string' || sentence === '') {
    return [];
  }
  let longestWordLength = 0;
  let longestWord = [];
  let words = sentence.trim().split(/\s+/);
  for (let word of words) {
    if (word.length >= longestWordLength) {
      if(word.length > longestWordLength) longestWord.length = 0;
      longestWordLength = word.length;
      longestWord.push(word);
    }
  }
  return longestWord.length === 1 ? longestWord[0] : longestWord;
}

let sentence = 'I am Vasya';
console.log(findLongestWords(sentence));

export { isPalindrom, findLongestWords };
