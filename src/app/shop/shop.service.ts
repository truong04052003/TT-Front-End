import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from './shop';
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
}
