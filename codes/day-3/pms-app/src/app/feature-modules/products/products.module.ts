import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { PRODUCT_SERVICE_BASE_URL, PRODUCT_SERVICE_BASE_URL_TOKEN, PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from 'src/app/utility/constants';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [HttpClientModule, CommonModule],
  providers: [
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE_TYPE
    },
    {
      provide: PRODUCT_SERVICE_BASE_URL_TOKEN,
      useValue: PRODUCT_SERVICE_BASE_URL
    }
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
