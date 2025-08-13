/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function vowelsCount(word){
  const vowelsRegex = /[aeiou]/gi;
  const count = (word.match(vowelsRegex) || []).length;
  return count;
}

function sortedByVowels(wordsArr) {
  const sorted = wordsArr.toSorted((a, b) => {
    const countA = vowelsCount(a);
    const countB = vowelsCount(b);
    return countA - countB;
  });
  return sorted;
}

export { sortedByVowels };
