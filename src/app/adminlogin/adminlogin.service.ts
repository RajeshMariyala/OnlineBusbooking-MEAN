import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient:HttpClient) { }

  login(loginDetails1:any){
    return this.httpClient.post("http://localhost:3005/api/admin",loginDetails1);

  }
}
