/*
 Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
 1. Создать массив из ключей объекта character и присвоить его в переменную "keyWithFourChars" т.е., где 4 буквы //name, isQa
 2. Создать массив из значений объекта character и присвоить его в переменную "stringValues" е, где тип данных строка //'Barney', 'male'
 3. Создать массив из ключей и значений объекта character и присвоить его в переменную "keyValuePairs", перебрать массив циклом for. 
   На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
 4. Проверить, есть ли в объекте ключ salary, результат присвоить в переменные "hasSalaryKey1stOption | hasSalaryKey2ndOption"
   (Реализовать 2мя способами: через оператор "in" (1st) и "Object.hasOwn()" (2nd))
*/

const character = { name: 'Barney', age: 36, gender: 'male', isQa: true };

// 1
let keyWithFourChars = getKeyWithFourChars(character);

function getKeyWithFourChars(characterData) {
  return Object.keys(characterData).filter((element) => element.length === 4);
}

console.log(keyWithFourChars);

// 2
let stringValues = getStringValues(character);

function getStringValues(characterData) {
  return Object.values(characterData).filter((element) => typeof element === 'string');
}

console.log(stringValues);

// 3
/* Do not touch this part */
const logSpy = jest.spyOn(console, 'log');
// ---

let keyValuePairs = getKeyValuePairs(character);

function getKeyValuePairs(characterData) {
  const keys = Object.keys(characterData);
  const values = Object.values(characterData);
  return keys.map((el, i) => [el, values[i]]);
}

for (const [key, value] of Object.entries(character)) {
  console.log(`key = ${key}, value = ${value}`);
}

// 4
let hasSalaryKey1stOption = ('salary' in character);
let hasSalaryKey2ndOption = Object.hasOwn(character, 'salary');

export { keyWithFourChars, stringValues, hasSalaryKey1stOption, hasSalaryKey2ndOption, keyValuePairs, logSpy };
