import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  url = "http://ip-api.com/json/";
  

  getConnectionDetails(){
    return this.http.get(this.url);
  }
}
