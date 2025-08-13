/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers = []) {
  const sortedArray = numbers.toSorted((a, b) => a - b);
  const missingElementIndex = sortedArray.findIndex((value, index) => index !== value - 1) + 1;
  return missingElementIndex === 0 ? sortedArray.length + 1 : missingElementIndex;
}

export { findMissingNumber };
