import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  apiurl = "http://localhost:3000/users";
  
  GetUserDetails(){
    return this.http.get(this.apiurl);
  }

}
