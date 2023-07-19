import { Employee } from "../models/employee";

export class EmployeeRepository {
    private static employees: Employee[] = [];

    static get Employees(): Employee[] {
        return this.employees
    }
    static set Employees(newArr: Employee[]) {
        this.employees = newArr
    }
}