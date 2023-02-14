import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { Customer } from './../shop';
import { Confirm } from '../../shop/confirm.component';


@Component({
  selector: 'app-register',
  templateUrl: './../templates/register.component.html',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  error:any;
  constructor(
    private _Router: Router,
    private _AuthService: AuthService,
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'name':new FormControl('',[
        Validators.required,
      ]),
      'email':new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'phone':new FormControl('',[
        Validators.required,
      ]),
      'address':new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      'confirmPassword': new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
    },[Confirm.confirm('password', 'confirmPassword')])


  }
  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }
  onSubmit(value:any):void{
      let Customer: Customer = {
        name:value.name,
        phone:value.phone,
        address:value.address,
        email:value.email,
        password:value.password,
      }
      console.log(Customer);
      
      this._AuthService.register(Customer).subscribe(()=>{
        this._Router.navigate(['']);
      }, err => {
        this.error = true;
      } );
      this._AuthService.login(Customer).subscribe(res =>{
        localStorage.setItem('access_token', res.access_token);

        this._Router.navigate(['home']);
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
            title: 'Đăng kí thành công!'
          })
          // kết thúc thông báo
      });

  }
}
