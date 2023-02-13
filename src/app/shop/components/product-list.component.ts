import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import Swal from 'sweetalert2';
// import swal from 'swal'; 
@Component({
  selector: 'app-product-list',
  templateUrl: './../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit {
  constructor(private shopService: ShopService) {
  }
  products: any[] = [];
  categories: any[] = [];
  cate_id: any;
  product_cate: any[] = [];
  p: any = 1;
  url: string = environment.url;
  ngOnInit(): void {
    this.product_list();
    this.category_list();
  }

  product_list() {
    this.shopService.product_list().subscribe(res => {
      this.products = res;
    });
  }
  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
      // thông báo
      const Toast = Swal.mixin({
        toast: true,
        width: 400,
        position: 'top-end',
        color: 'rgb(255, 255, 255)',
        padding: '2em',
        showConfirmButton: false,
        background: 'rgb(108, 108, 108)',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Sản Phẩm Đã được thêm vào giỏ hàng!'
      })
    })
  }
  category_list() {
    this.shopService.category_list().subscribe(res => {
      this.categories = res;
    })
  }
  product_OfCate(cate_id: any) {
    this.cate_id = cate_id;
    this.shopService.category_list().subscribe(res => {
      this.categories = res;
      for (const category of this.categories) {
        if (this.cate_id == category.id) {
          this.products = category.products;
          this.product_cate = this.products;
        }
      }
    })
  }
  


}
