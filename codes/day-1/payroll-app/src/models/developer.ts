import { Employee } from "./employee";

export class Developer extends Employee {

    /*
    gratuityPay: number;

    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number, gratuityPay: number) {
        super(name, id, basicPay, daPay, hraPay)
        this.gratuityPay = gratuityPay;
    }
    */
    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number, public gratuityPay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary(): number {
        return super.calculateSalary() + this.gratuityPay;
    }
}