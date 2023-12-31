import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { PRODUCT_SERVICE_BASE_URL, PRODUCT_SERVICE_BASE_URL_TOKEN, PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from 'src/app/utility/constants';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductNameComponent } from './components/filter-product-name/filter-product-name.component';
import { StarComponent } from './components/star/star.component';
import { RouterModule, Routes } from '@angular/router';

const productRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'view/:id',
        component: ProductViewComponent
      },
      {
        path: 'update/:id',
        component: UpdateProductComponent
      }
    ]
  },
  // {
  //   path: 'products',
  //   component: ProductListComponent
  // },
  // {
  //   path: 'products/add',
  //   component: AddProductComponent
  // },
  // {
  //   path: 'products/view/:id',
  //   component: ProductViewComponent
  // },
  // {
  //   path: 'products/update/:id',
  //   component: UpdateProductComponent
  // }
]


@NgModule({
  declarations: [
    ProductListComponent,
    ProductViewComponent,
    AddProductComponent,
    UpdateProductComponent,
    FilterProductPipe,
    FilterProductNameComponent,
    StarComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
    //RouterModule.forRoot(productRoutes)
  ],
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
