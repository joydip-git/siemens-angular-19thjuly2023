import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    //to register components, pipes, directives
    declarations: [AppComponent],
    //to register services
    providers: [],
    //to register modules (application child modules or built-in angular modules)
    imports: [BrowserModule],
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