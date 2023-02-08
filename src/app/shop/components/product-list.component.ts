import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit  {
  constructor(private shopService: ShopService) { 
    this.product_list();
  }
  products: any[] = [];
  categories: any[] = [];
  cate_id: any;
  product_cate: any[] = [];
  p: any = 1;
  url: string = environment.url;
  ngOnInit(): void {
    // this.product_list();
    // this.category_list();
  }

  product_list() {
    this.shopService.product_list().subscribe(res => {
      this.products = res;
    });
  }
}
