import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';
import { IProductTwo } from '../products/product2';




@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  
  url = 'https://jsonplaceholder.typicode.com/posts';
   

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProductTwo[]> {
    return this.http.get<IProductTwo[]>(this.url);
  }
}
