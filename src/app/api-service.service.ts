import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  addCustomer=(DatatoSend:any)=>{
    return this.http.post("http://localhost:8080/signup",DatatoSend)
  }

  customerLogin=(DatatoSend:any)=>{
    return this.http.post("http://localhost:8080/customerlogin",DatatoSend)
  }
}
