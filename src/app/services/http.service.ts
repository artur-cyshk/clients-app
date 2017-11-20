import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { HOST, ENDPOINTS } from '../constants/common';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<Object> {
    return this.http.get(HOST + ENDPOINTS[url]);
  }

  put(url: string, data?: Object): Observable<any> {
    return this.http.put(HOST + ENDPOINTS[url], data, {responseType: 'text'});
  }
}
