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

  if (originalWord === reversed) {
    return true
  } else if (originalWord === '') {
    return true;
  } else {
    return false;
  }
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
      longestWordLength = word.length;
      longestWord.push(word);
    }
  }
  let resultWord = [...longestWord];
  for (let i = 0; i < longestWord.length; i++) {
    if (longestWord[i].length < longestWordLength) {
      resultWord.splice(i, 1);
    }
  }
  return resultWord;
}

let sentence = 'I am Vasya';
console.log(findLongestWords(sentence));

export { isPalindrom, findLongestWords };
