import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CalculatorComponent } from "./calculator/calculator.component";
import { FormsModule } from "@angular/forms";
import { CalculationService } from "./services/calculation.service";
import { CALC_SERVICE_TOKEN, CALC_SERVICE_TYPE } from "./constants/appconstants";

@NgModule({
    //to register components, pipes, directives
    declarations: [AppComponent, CalculatorComponent],
    //to register services
    //providers: [CalculationService],
    providers: [
        {
            provide: CALC_SERVICE_TOKEN,
            useClass: CALC_SERVICE_TYPE
        }
    ],
    //to register modules (application child modules or built-in angular modules)
    imports: [BrowserModule, FormsModule],
    //bootstrapper components
    bootstrap: [AppComponent],
    //which of the assets (except service) registered with this module should be exported to other modules
    exports: []
})
export class AppModule {
    constructor() {
        console.log("app module created")
    }
}