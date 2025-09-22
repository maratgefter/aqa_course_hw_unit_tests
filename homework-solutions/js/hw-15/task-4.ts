interface IDepartment {
  id: number;
  name: string;
  employees_count: number;
};

interface IEnterprise {
  id: number;
  name: string;
  departments: IDepartment[];
};

class Department implements IDepartment {
  constructor(public id: number, public name: string, public employees_count: number) { }

  public getEmployeesCount() {
    return this.employees_count;
  }
}

class Enterprise implements IEnterprise {
  public departments: Department[] = [];

  constructor(public id: number, public name: string) { }

  public addDepartment(id: number, name: string, employees_count: number = 0): void {
    const departament = new Department(id, name, employees_count);
    this.departments.push(departament);
  }
}

class EnterprisesData {
  protected enterprises: Enterprise[] = [];
  private usedIds: number[] = [];

  private idGenerator(): number {
    const newId = this.usedIds.length ? this.usedIds[this.usedIds.length - 1] + 1 : 1;
    this.usedIds.push(newId);
    return newId;
  }

  /*3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
  Пример:
  addEnterprise("Название нового предприятия")*/

  public addEnterprise(name: string): void {
    const enterprise = new Enterprise(this.idGenerator(), name);
    this.enterprises.push(enterprise);
  }

  /* 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  
  Пример:
  addDepartment(1, "Название нового отдела")*/

  public addDepartment(enterpriseId: number, departmentName: string, employees_count: number = 0): void {
    const enterprise = this.enterprises.find(ent => ent.id === enterpriseId);

    if (!enterprise) throw new Error('Комания не найдена');

    enterprise.departments.push(new Department(this.idGenerator(), departmentName, employees_count));
  }

  public getEnterprisesList() {
    return this.enterprises;
  }
}

const enterprisesData = new EnterprisesData();
enterprisesData.addEnterprise('Предприятие 1');
enterprisesData.addEnterprise('Предприятие 2');
enterprisesData.addDepartment(1,'Бухгалтерия');
// enterprisesData.addDepartment(6,'Бухгалтерия');
console.log(JSON.stringify(enterprisesData.getEnterprisesList()));

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)