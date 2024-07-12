import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient:HttpClient){}


  signup(signupDetails:any){
   return this.httpClient.post("http://localhost:3005/api/Register",signupDetails);
  }
}
