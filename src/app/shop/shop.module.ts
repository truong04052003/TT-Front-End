import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopService } from "./shop.service";
import { ShopComponent } from './shop.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { ProductListComponent } from './components/product-list.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ListorderComponent } from './components/listorder.component';
import { CheckoutComponent } from './components/checkout.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductDetailComponent,
    ListorderComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatInputModule
  ],
  providers:[
    ShopService
  ]
})
export class ShopModule { }
