// import { Injectable } from '@angular/core';
// import { Http, Request, RequestMethod } from '@angular/http';
// import { Observable } from 'rxjs';
// import { Product } from './product.model';
// import { Cart } from './cart.model';
// import { Order } from './order.model';
// import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';


// const PROTOCOL = 'http';
// const PORT = 3500;
// @Injectable()
// export class RestDataSource {
//   baseUrl: string;
//   constructor(private http: HttpClient) {
//     this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
//   }
//   getProducts(): Observable<Product[]> {
//     return this.sendRequest(RequestMethod.Get, "products");
//   }
//   // saveOrder(order: Order): Observable<Order> {
//   //   return this.sendRequest(RequestMethod.Post, 'orders', order);
//   // }
//   private sendRequest(verb: RequestMethod,
//     url: string, body?: Product | Order): Observable<Product | Order> {
//     return this.http.request(new HttpClient({
//       method: verb,
//       url: this.baseUrl + url,
//       body: body
//     })).pipe(map(response => response.json()));
//   }
// }