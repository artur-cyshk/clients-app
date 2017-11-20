import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../constants/common';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get(url: string): Observable<Object> {
    return this.http.get(environment.host + ENDPOINTS[url]);
  }

  put(url: string, data?: Object): Observable<any> {
    return this.http.put(environment.host + ENDPOINTS[url], data, {responseType: 'text'});
  }
}
