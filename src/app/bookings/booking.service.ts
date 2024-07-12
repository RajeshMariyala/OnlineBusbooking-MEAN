import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(public HttpClient:HttpClient) { }

  getAllBuses(){
    return this.HttpClient.get<any[]>('http://localhost:3005/api/buses');
  }

}