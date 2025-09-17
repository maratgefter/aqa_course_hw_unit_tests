/*
Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов
у которых есть как минимум поле salary: number, и возвращается среднее арифметическое
зарплат всех переданных объектов
*/

interface Employee {
    salary: number;
};

function getAvgSalary<T extends Employee>(...args: T[]): number {
    const total = args.reduce((sum, item) => sum + item.salary, 0);
    return total / args.length;
}

const emp1 = { name: "Vasya", surname: "Vasin", salary: 1000 };
const emp2 = { name: "Katya", surname: "Katina", salary: 2000 };
const emp3 = { name: "Galina", surname: "Galinina", salary: 3000 };

console.log(getAvgSalary(emp1, emp2, emp3));