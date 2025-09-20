/*
Необходимо создать классовую структуру
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".

2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
4. Создайте объект класса Car и проверьте работоспособность
*/

interface IVehicle {
  getDetails(): string;
  start(): string;
}

abstract class Vehicle implements IVehicle {
  constructor(protected make: string, protected model: string) {}

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`
  }

  abstract getDetails(): string;
}

class Car extends Vehicle {
  constructor(protected make: string, protected model: string, protected year: number) {
    super(make, model);
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

const auto = new Car ('VAZ', '2101', 1970);

console.log(auto);
console.log(auto.start());
console.log(auto.getDetails());