export interface IService {
    add(first: number, second: number): number;
}


export class CalculationService implements IService {
    constructor() {
        console.log('calc service created')
    }
    add(first: number, second: number): number {
        return first + second
    }
}
