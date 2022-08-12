import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  apiUrl = `${environment.apiEndpoint}${appConstant.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
