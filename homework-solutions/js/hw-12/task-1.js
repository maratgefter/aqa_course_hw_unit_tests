/*1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds*/

function delayTwoSeconds(callback) {
  if (typeof callback !== 'function') {
    throw new Error('Аргумент должен быть функцией');
  }
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => console.log('Called after 2 seconds'));
/*2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль*/

const promiseOne = new Promise((resolve, reject) => {
  resolve(1);
});

promiseOne.then((result) => {
  console.log(`Result: ${result}`);
});

/*3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль*/

const promiseFailed = new Promise((_, reject) => {
  reject();
});

promiseFailed.catch(() => {
  console.error('Promise failed');
});

/*4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.*/

function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

console.log(promiseNumber(25));

/*5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then*/

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((values) => {
  console.log(values);
});

/*6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then*/

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => {
  result.forEach((item) => {
    if (item.status === 'fulfilled') {
      console.log(`fulfilled: ${item.value}`);
    } else {
      console.log(`rejected: ${item.value}`);
    }
  });
});

/*7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch*/

async function runWithTryCatch() {
  try {
    const all = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    all.forEach((value) => {
      console.log(`Promise ${value}`);
    });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }

  try {
    const all = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    all.forEach((value) => {
      console.log(`Promise ${value.value}`);
    });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}

runWithTryCatch();