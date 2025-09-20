/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends Record<string, any>, V>(
  obj: T,
  value: V
): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

const employee = {
    'name': 'Petya',
    'age': 21,
    'skill': 'QA'
}
console.log(getKeyByValue(employee, 21));
console.log(getKeyByValue(employee, 'test'));