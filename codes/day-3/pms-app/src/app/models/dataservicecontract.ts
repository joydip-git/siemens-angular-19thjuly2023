import { Observable } from "rxjs";
import { ApiResponse } from "./apiresponse";
import { Product } from "./product";

export interface IDataService {
    getAll(): Observable<ApiResponse<Product[]>>;
    get(id: number): Observable<ApiResponse<Product>>;
    add(p: Product): Observable<ApiResponse<Product[]>>;
    update(id: number, p: Product): Observable<ApiResponse<Product[]>>;
    delete(id: number): Observable<ApiResponse<Product[]>>;
}