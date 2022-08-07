import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  url: any = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url);
  }
}
