import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDataService } from 'src/app/models/dataservicecontract';
import { Inject } from "@angular/core";
import { PRODUCT_SERVICE_TOKEN } from 'src/app/utility/constants';
import { Product } from 'src/app/models/product';
import { ApiResponse } from 'src/app/models/apiresponse';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  loadingComplete = false;
  errorMessage = '';
  products?: Product[];

  filterText = ''

  private productSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IDataService) {

  }
  updateFilterValue(text: string) {
    this.filterText = text
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {

    this.productSubscription =
      this.ps.getAll()
        .subscribe({
          next: (resp: ApiResponse<Product[]>) => {
            this.loadingComplete = true
            this.errorMessage = ''
            if (resp.data !== null)
              this.products = resp.data
            else
              this.products = undefined
          },
          error: (err: Error) => {
            this.loadingComplete = true
            this.errorMessage = err.message
            this.products = undefined
          },
          complete: () => { }
        })

  }

}
