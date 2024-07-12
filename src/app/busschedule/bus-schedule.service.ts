import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusScheduleService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get("http://localhost:3005/api/buses");
  }

  addData(busDetails:any){
    return this.httpClient.post("http://localhost:3005/api/buses",busDetails);
  }

  delete(sno: any) {
    return this.httpClient.delete(`http://localhost:3005/api/buses/${sno}`);
  }

  updateData(bus:any){
    return this.httpClient.put("http://localhost:3005/api/buses/",bus);
  }
  
}
