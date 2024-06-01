import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get(url, options) as Observable<T>;
  }

  post<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.post(url, options) as Observable<T>;
  }

  delete<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.delete(url, options) as Observable<T>;
  }

  put<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.put(url, options) as Observable<T>;
  }
}
