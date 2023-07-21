import { Product } from "src/app/models/product";
import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { PRODUCT_SERVICE_BASE_URL_TOKEN } from "src/app/utility/constants";
import { ApiResponse } from "src/app/models/apiresponse";
import { Observable } from "rxjs";
import { IDataService } from "src/app/models/dataservicecontract";

//use only when the service should registered with root module (in the providers array) with default provider configuration
// @Injectable({
//   providedIn:'root'
// })
@Injectable()
export class ProductService implements IDataService {

  constructor(
    private http: HttpClient,
    @Inject(PRODUCT_SERVICE_BASE_URL_TOKEN) private url: string
  ) {

  }

  getAll(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(this.url)
  }
  get(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${this.url}/${id}`)
  }
  add(p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(this.url, p)
  }
  update(id: number, p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.put<ApiResponse<Product[]>>(`${this.url}/${id}`, p)
  }
  delete(id: number): Observable<ApiResponse<Product[]>> {
    return this.http.delete<ApiResponse<Product[]>>(`${this.url}/${id}`)
  }
}
