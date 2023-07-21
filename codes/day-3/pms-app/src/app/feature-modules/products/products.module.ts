import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [],
  exports: [ProductListComponent]
})
export class ProductsModule { }
