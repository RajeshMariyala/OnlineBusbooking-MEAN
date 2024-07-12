import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class BusTicketService{

    constructor(public HttpClient:HttpClient) { }
  
    getAllusers(){
      return this.HttpClient.get<any[]>('http://localhost:3005/api/user');
    }
}