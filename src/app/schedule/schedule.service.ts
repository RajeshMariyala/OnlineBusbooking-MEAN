import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(public httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get("http://localhost:3005/api/Book");
  }
  addData(busDetails:any){
    return this.httpClient.post("http://localhost:3005/api/Book",busDetails);
  }
  updateData(bus: any) {
    return this.httpClient.put(`http://localhost:3005/api/Book/${bus.Busid}`, bus);
  }
  
  delete(Busid: any) {
    return this.httpClient.delete(`http://localhost:3005/api/Book/${Busid}`);
  }

}
