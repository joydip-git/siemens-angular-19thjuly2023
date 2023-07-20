import { NgModuleRef, PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

setTimeout(
  () => {
    const platform: PlatformRef = platformBrowserDynamic()
    const p = platform.bootstrapModule(AppModule)
    p.then(
      (ref: NgModuleRef<AppModule>) => {
        console.log(ref.instance)
      },
      (e) => { console.log(e) }
    )
  },
  5000
)