import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './feature-modules/products/products.module';
import { DashboardComponent } from './feature-modules/common/dashboard/dashboard.component';
import { HomeComponent } from './feature-modules/common/home/home.component';
import { PageNotFoundComponent } from './feature-modules/common/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
