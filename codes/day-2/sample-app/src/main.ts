import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { PlatformRef, NgModuleRef } from "@angular/core";
import { AppModule } from "./app/app.module";

console.log('begining of angular app')
const platform: PlatformRef = platformBrowserDynamic()
platform
    .bootstrapModule(AppModule)
    .then(
        (ref: NgModuleRef<AppModule>) => { console.log(ref.instance) },
        (err) => { console.log(err) }
    )