import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuslistService {

  constructor(private httpClient:HttpClient) { }

  getBusList(){
    return this.httpClient.get("http://localhost:3005/api/Buslist");
  }

  addBusList(busDetails:any){
    return this.httpClient.post("http://localhost:3005/api/Buslist",busDetails); 
}

  updateBusList(busDetails: any) {
    return this.httpClient.put(`http://localhost:3005/api/Buslist/${busDetails.Busid}`, busDetails);
  }
  
  deleteBus(Busid: any) {
    return this.httpClient.delete(`http://localhost:3005/api/Buslist/${Busid}`);
  }
}
