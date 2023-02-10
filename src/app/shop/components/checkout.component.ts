import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Order } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './../templates/checkout.component.html',
})
export class CheckoutComponent {
  name: any;
  id: any;
  email: any;
  listCart: any;
  cartSubtotal: number = 0;
  url: any = environment.url + 'public/uploads/';
  message: {} = {};
  customer_id: any;
  totalPrice: number = 0;
  orders: any;
  CheckoutFrom!: FormGroup;
  phone: any;
  _order: any;
  constructor(
    // private _ShopService: ShopService,
    private ShopService: ShopService,
    private route: ActivatedRoute,
    private _Router: Router,
    private _UserService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['id'];
    this.profile()
    this.CheckoutFrom = new FormGroup({
      name: new FormControl('', [Validators.required,]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      email: new FormControl(''),
      address: new FormControl('', [Validators.required,]),
      note: new FormControl(''),
    });

    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.orders = res;
      for (let orderDetail of this.orders) {
        this.totalPrice += (parseInt(orderDetail.price) * parseInt(orderDetail.quantity));
      }
    })
  }

  profile() {
    if (this._UserService.checkAuth()) {
      console.log('đăng nhập rồi');
      this._UserService.profile().subscribe(res => {
        this.id = res.id;
        this.name = res.name;
        this.email = res.email;
        this.phone = res.phone;
      });
    }
  }

  Order() {
    let order: any;
    let id = this.id;
    let data = this.CheckoutFrom.value;
    let Order: Order = {
      total: this.totalPrice,
      note: data.note,
      customer_id: id,
    }
    console.log(Order);

    this.ShopService.storeOrder(Order).subscribe(res => {
      order = res;
      Swal.fire({
        icon: 'success',
        title: 'Đặt hàng thành công!',
        text: 'Bây giờ tiếp tục mua hàng nhé!',
        confirmButtonText: 'Tuyệt',
      }).then((result) => {
        if (result.isConfirmed) {
          this._Router.navigate(['order-detail']);
        }
      })
    });

  }
}
