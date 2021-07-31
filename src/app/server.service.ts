import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  auth =
    'Basic Njk5Njc3MzE4Nzk2YWRlNjc0YWI5ZTAxYTg0ZmQ2MTY6c2hwcGFfNTcwM2U5YWY5MjMxYzk1ZDAzNGY2YmIwNjdiNTJjODQ=';
  constructor(private httpClient: HttpClient) {}

  getOrder() {
    var httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.auth,
      }),
    };
    return this.httpClient.get(
      '/admin/api/2021-07/orders.json?status=any',
      httpOptions
    );
  }

  CreateOrder(orderData) {
    var httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.auth,
      }),
      responseType: 'text' as 'json',
      withCredentials: false,
    };

    return this.httpClient.post(
      '/admin/api/2021-07/orders.json',
      orderData,
      httpOptions
    );
  }
}
