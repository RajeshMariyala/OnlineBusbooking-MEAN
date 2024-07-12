import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private httpClient:HttpClient) { }

  getUserData(){
    return this.httpClient.get("http://localhost:3005/api/User");
  }
  updateUserData(userDetails:any){
    return this.httpClient.put("http://localhost:3005/api/User",userDetails)
  }
}
