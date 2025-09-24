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

  public getPluralForm(n: number, one: string, few: string, many: string): string {
    const mod10 = n % 10;
    const mod100 = n % 100;

    if (mod10 === 1 && mod100 !== 11) return one;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
  }

  public getEmployeesCount(): string {
    return `${this.employees_count} ${this.getPluralForm(this.employees_count, 'сотрудник', 'сотрудника', 'сотрудников')}`;
  }
}

class Enterprise implements IEnterprise {
  public departments: Department[] = [];

  constructor(public id: number, public name: string) { }

  public addDepartment(id: number, name: string, employees_count: number = 0): void {
    const departament = new Department(id, name, employees_count);
    this.departments.push(departament);
  }

  public getDepartmentsInfo(): string {
    return this.departments.reduce((res, dep) => res += `- ${dep.name} (${dep.getEmployeesCount()})\n`, '')
  }

  public checkDepartmentInEnterprise(departmentIdOrName: number | string): boolean {
    for (const department of this.departments) {
      if (department.id === departmentIdOrName || department.name === departmentIdOrName) {
        return true;
      }
    }
    return false;
  }

  public getTotalEmployeesCount(): string {
    const totalEmployeesCount = this.departments.reduce((res, dep) => res += dep.employees_count, 0);
    return `${totalEmployeesCount} ${this.departments[0]?.getPluralForm(totalEmployeesCount, 'сотрудник', 'сотрудника', 'сотрудников')}`;
  }

  public editDepartment(id: number, newName: string) {
    const isThereDepartment: boolean = this.checkDepartmentInEnterprise(id);

    if (!isThereDepartment) {
      throw new Error('Отдел не найден')
    }
    const departamentKey = this.departments.findIndex(dep => dep.id === id);

    this.departments[departamentKey].name = newName;
  }

  public deleteDepartment(id: number): void {
    const isThereDepartment: boolean = this.checkDepartmentInEnterprise(id);

    if (!isThereDepartment) {
      throw new Error('Отдел не найден')
    }
    const departamentKey = this.departments.findIndex(dep => dep.id === id);

    if (this.departments[departamentKey].employees_count === 0) {
      this.departments.splice(departamentKey, 1);
    } else {
      throw new Error('Данный отдел нельзя удалить');
    }
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

  /* 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
  
  **Пример:**
  
  Предприятие 1 (45 сотрудников)
  - Отдел тестирования (10 сотрудников)
  - Отдел маркетинга (20 сотрудников)
  - Администрация (15 человек)
  Предприятие 2 (75 сотрудников)
  - Отдел разработки (50 сотрудников)
  - Отдел маркетинга (20 сотрудников)
  - Отдел охраны труда (5 сотрудников)
  Предприятие 3 (нет сотрудников)
  - Отдел аналитики (нет сотрудников)*/

  public getEnterprisesInfo() {
    return this.enterprises.reduce((res, enterprise) => res += `${enterprise.name} (${enterprise.getTotalEmployeesCount()})\n${enterprise.getDepartmentsInfo()}`, '')
  }

  /*2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).
  
  Пример:
  getEnterpriseName(4)
  getEnterpriseName("Отдел маркетинга")*/

  public getEnterpriseName(departmentIdOrName: string | number): string | undefined {
    for (const enterprise of this.enterprises) {
      if (enterprise.checkDepartmentInEnterprise(departmentIdOrName)) {
        return enterprise.name;
      }
    }
    throw new Error('Комания не найдена');
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

  /*5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

  Пример:
  editEnterprise(1, "Новое название предприятия")*/

  public editEnterprise(id: number, newName: string): void {
    const enterprise = this.enterprises.find(ent => ent.id === id);

    if (!enterprise) throw new Error('Комания не найдена');

    enterprise.name = newName;
  }

  /* 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

  Пример:
  editDepartment(7, "Новое название отдела")*/

  public editDepartment(id: number, newName: string): void {
    const enterprise = this.enterprises.find(ent =>
      ent.departments.some(dep => dep.id === id)
    );

    if (!enterprise) {
      throw new Error('Отдел не найден');
    }

    enterprise.editDepartment(id, newName);
  }

  /*7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

  Пример:
  deleteEnterprise(1)*/

  public deleteEnterprise(id: number): void {
    const enterprise = this.enterprises.find(ent => ent.id === id);

    if (!enterprise) throw new Error('Комания не найдена');

    const enterpriseIndex = this.enterprises.indexOf(enterprise);

    this.enterprises.splice(enterpriseIndex, 1);
  }

  /*8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

  Пример:
  deleteDepartment(3)*/

  public deleteDepartment(id: number): void {
    const enterprise = this.enterprises.find(ent =>
      ent.departments.some(dep => dep.id === id)
    );

    if (!enterprise) {
      throw new Error('Отдел не найден');
    }

    enterprise.deleteDepartment(id);
  }


  public getEnterprisesList() {
    return this.enterprises;
  }
}

const enterprisesData = new EnterprisesData();
enterprisesData.addEnterprise('Предприятие 1');
enterprisesData.addEnterprise('Предприятие 2');
enterprisesData.addEnterprise('Предприятие 3');
enterprisesData.addDepartment(1, 'Бухгалтерия');
enterprisesData.addDepartment(1, 'Охраны труда');
enterprisesData.addDepartment(1, 'Менеджемент', 300);
enterprisesData.addDepartment(2, 'Охрана', 11);
enterprisesData.addDepartment(2, 'Технологический отдел', 2);
enterprisesData.addDepartment(2, 'Экономический отдел', 175);
enterprisesData.addDepartment(3, 'Лаборатория', 7);
enterprisesData.addDepartment(3, 'Реклама', 4);
// console.log(`Найденное предприятие: ${enterprisesData.getEnterpriseName('Экономический отдел')}`);
// enterprisesData.editEnterprise(1, 'newRandom');
// enterprisesData.deleteEnterprise(3);
// enterprisesData.deleteDepartment(4);
// enterprisesData.editDepartment(5, 'Updated');

// console.log(JSON.stringify(enterprisesData.getEnterprisesList()));


console.log(enterprisesData.getEnterprisesInfo());

// Задания:

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)