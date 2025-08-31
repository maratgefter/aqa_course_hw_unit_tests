class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (this.#isValidFirstNameLastName(value)) throw new Error('This value must be string.');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (this.#isValidFirstNameLastName(value)) throw new Error('This value must be string.');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!this.#isValidProfession(value)) throw new Error('This value must be string.');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value <= 0 || value >= 10000 || isNaN(value))
      throw new Error('This value must be positive number.');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  #isValidProfession(value) {
    const trimmed = value.trim();
    const regex = /^[A-Za-z\s]+$/;
    return trimmed.length > 0 && regex.test(trimmed);
  }

  #isValidFirstNameLastName(value) {
    return typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value);
  }
}

class Company {
  #employees = [];

  constructor(title, phone, address, employees) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Wrong employee data');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    let employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден.`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник с именем "${firstName}" не найден.`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }
}

export { Employee, Company };
