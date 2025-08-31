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
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || value < 0) throw new Error('This value must be positive number.');
    this.#salary = value;
  }

    getFullName() {return `${this.firstName} ${this.lastName}`}
}

const aqa = new Employee("Vasya", "Vasin", "AQA", 3000);
console.log(aqa);
console.log(aqa.getFullName());
console.log(aqa.salary);

const qa = new Employee("Ignat", "Ignatov", "QA", 330);
console.log(qa);
console.log(qa.getFullName());
console.log(qa.salary);

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
    if (typeof value !== 'number' || value < 0) throw new Error('This value must be positive number.');
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (typeof value !== 'string') throw new Error('This value must be string.');
    this._address = value;
  }

  addEmployee(employee){
    if(!(employee instanceof Employee)) {throw new Error('Wrong employee data')};
    this.#employees.push(employee);
  }

  getEmployees(){return [...this.#employees]}

  getInfo(){
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
