import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient: HttpClient) { }

  get(api_url) {
    return this.httpClient.get(api_url);
  }

  post(api_url, body) {
    return this.httpClient.post(api_url, body);
  }

  put(api_url, body) {
    return this.httpClient.put(api_url, body);
  }

  delete(api_url) {
    return this.httpClient.delete(api_url);
  }
}
