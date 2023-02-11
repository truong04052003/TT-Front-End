import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './shop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _HttpClient: HttpClient,
    private _Router: Router
    ) {

  }
  checkAuth():any{
    let token = localStorage.getItem('access_token');
    return token;
  }
  login(data:Customer){
    return this._HttpClient.post<{access_token: string}>(environment.urlLogin ,data);
  }
  register(data:Customer){
    return this._HttpClient.post<Customer>(environment.urlRegister,data);
  }
  profile():Observable<Customer>{
    return this._HttpClient.get<Customer>(environment.urlProfile);
  }
  logout(){
    localStorage.removeItem('access_token');
  }
  
}
