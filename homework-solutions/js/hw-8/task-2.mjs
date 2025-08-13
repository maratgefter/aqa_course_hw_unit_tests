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

const vowelsRegex = /[aeiou]/gi;

function sortedByVowels(wordsArr) {
  const sorted = wordsArr.toSorted((a, b) => {
    const countA = (a.match(vowelsRegex) || []).length;
    const countB = (b.match(vowelsRegex) || []).length;
    return countA - countB;
  });
  return sorted;
}

export { sortedByVowels };
