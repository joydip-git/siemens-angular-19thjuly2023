import { Component, Inject } from "@angular/core";
import { CalculationService, IService } from "../services/calculation.service";
import { CALC_SERVICE_TOKEN } from "../constants/appconstants";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
    //providers: [CalculationService]
})
export class CalculatorComponent {
    txtWidth = 200
    result = 0
    firstVal = 0
    secondVal = 0
    //private calcSvcRef: CalculationService;
    //private calcSvcRef: IService;

    //constructor(calcSvc: CalculationService) {
    // constructor(@Inject(CALC_SERVICE_TOKEN) calcSvc: CalculationService) {
    //constructor(@Inject(CALC_SERVICE_TOKEN) calcSvc: IService) {
    constructor(@Inject(CALC_SERVICE_TOKEN) private calcSvcRef: IService) {
        //this.calcSvcRef = new CalculationService()
        //this.calcSvcRef = calcSvc
    }
    // add(firstVal: number, secondVal: number) {
    //     this.result = firstVal + secondVal
    // }
    // updateFirstVal(newFirstVal: number) {
    //     this.firstVal = newFirstVal
    // }
    // updateSecondVal(newSecondVal: number) {
    //     this.secondVal = newSecondVal
    // }
    addNumbers() {
        this.result = this.calcSvcRef.add(Number(this.firstVal), Number(this.secondVal))
    }
}