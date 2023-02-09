import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Product,Images } from './shop';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  image_detail(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  product_list(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlAllProducts);
  }
  addToCart(id: number) {
    return this.http.get(environment.urlAddToCart + id);
  }
  product_detail(id: any): Observable<Product> {
    return this.http.get<Product>(environment.urlAllproduct_detail + '/' + id);
  }
  product_images(id: any): Observable<Images[]> {
    return this.http.get<Images[]>(environment.urlAllImage + '/' + id);
  }
}
