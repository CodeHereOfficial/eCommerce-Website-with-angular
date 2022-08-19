import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {
apiEndpoint= environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  httpGet(url: string): Observable<any> {
    return this.http.get(this.apiEndpoint + url);
  }
  httpPost(url:string, body: any): Observable<any> {
    return this.http.post(this.apiEndpoint + url, body);
  }
  httpPut(url: string, body: any): Observable<any> {
    return this.http.put(this.apiEndpoint + url, body);
  }
  httpDelete(url: any, body: any): Observable<any> {
    return this.http.delete(this.apiEndpoint + url, body);
  }

}