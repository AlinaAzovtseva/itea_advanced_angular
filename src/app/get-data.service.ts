import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(public http: HttpClient) { }

  getData(){
  	return this.http.get("https://fakestoreapi.com/products")
  }
}