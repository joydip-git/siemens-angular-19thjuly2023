import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    //template: `<h2>welcome to angular</h2>`
    templateUrl: './app.component.html',
    styleUrls: ['./app.compnent.css']
})
export class AppComponent {
    title = 'Welcome to Angular data binding'
    constructor() {
        console.log("app component created")
    }
    changeTitle(newTitle: string) {
        this.title = newTitle
    }
}