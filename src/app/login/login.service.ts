import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(loginDetails:any){
    return this.httpClient.post("http://localhost:3005/api/Login",loginDetails);

  }
}
