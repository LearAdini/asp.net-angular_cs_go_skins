import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Product } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;

  products: Product[] = [];
  product: Product;
  user: User;
  private currentProductSource$ = new ReplaySubject<Product | null>(1);
  currentProduct$ = this.currentProductSource$.asObservable();

  constructor(private http: HttpClient) {};


  getProducts(){
    return this.http.get<Product[]>(`${this.baseUrl}products`)
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseUrl}products/${id}`)
  }

  updateProduct(product:Product){
    return this.http.put(`${this.baseUrl}products`, product).pipe(
      tap(_ => {
        const index = this.products.findIndex(x => x.productId === product.productId);
        this.products[index] = product;
      })
    )
  }

  addProduct(model: any) {
    return this.http.post<Product>(`${this.baseUrl}products`, model)
      .pipe(
        map((product: Product) => {
          return product;
        })
      )
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseUrl}products/${id}`);
  }

}
