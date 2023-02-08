import { NgModule } from '@angular/core';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtinterceptorService } from './../app/shop/jwtinterceptor.service';


import { AppComponent } from './app.component';
import { FooterComponent } from './shop/components/footer.component';
import { HeaderComponent } from './shop/components/header.component';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { ShopModule } from './shop/shop.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './shop/components/login.component';
import { OrderDetailComponent } from './shop/components/order-detail.component';
import { HomeComponent } from './shop/components/home.component';
import { ProductDetailComponent } from './shop/components/product-detail.component';
import { ProductListComponent } from './shop/components/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    OrderDetailComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
   ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    ShopRoutingModule,
    BrowserAnimationsModule,



  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
