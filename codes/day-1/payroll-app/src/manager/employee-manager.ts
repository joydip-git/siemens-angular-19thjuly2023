import { Employee } from "../models/employee";
import { EmployeeRepository } from "../repository/employees";
import { IManager } from "./mnager-contract";

export class EmployeeManager implements IManager<Employee>{
    add(obj: Employee): boolean {
        const employeeArr = EmployeeRepository.Employees
        let status = false
        if (employeeArr.length > 0) {
            for (const e of employeeArr) {
                if (e.id === obj.id) {
                    status = true
                    return false
                }
            }
        }
        if (!status) {
            employeeArr.push(obj)
        }
        return true
    }
    delete(id: number): boolean {
        const empArr = EmployeeRepository.Employees
        const index = empArr.findIndex(
            function (e: Employee) {
                return e.id === id
            }
        )
        //if (found !== undefined) {
        if (index !== -1) {
            empArr.splice(index, 1)
            return true
        } else
            return false
    }
    update(obj: Employee, id: number): boolean {
        let empArr = EmployeeRepository.Employees
        const copy = [...empArr]
        const index = copy.findIndex(
            function (e: Employee) {
                return e.id === id
            }
        )
        //if (found !== undefined) {
        if (index !== -1) {
            copy.splice(index, 1, obj)
            EmployeeRepository.Employees = copy
            return true
        } else
            return false
    }
    fetchAll(): Employee[] {
        //spread operator
        // const obj = { name: 'joydip' }
        // const copy = { ...obj }
        // const numbers = [1, 2, 3, 4]
        // const c = [...numbers]
        return [...EmployeeRepository.Employees]
    }
    fetch(id: number): Employee | undefined {
        const emps = EmployeeRepository.Employees
        const found = emps.find(
            (e: Employee) => e.id === id
        )
        return found
    }
}