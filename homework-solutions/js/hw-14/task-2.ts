/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:).
Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]

*/

type MapCallback<T, U> = (element: T, index: number, array: T[]) => U;

function customMap<T, U>(arr: T[], callback: MapCallback<T, U>): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];

const mapped = customMap(arr, (value, index) => value * index);

console.log(mapped); // → [0, 2, 6, 12, 20]
