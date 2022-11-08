import { Product } from './../model/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pip } from '../model/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}
  getAllProduct() {
    return this.http.get<pip>(this.baseURL + '/products?limit=100');
  }
  getProduct(id) {
    return this.http.get<Product>(this.baseURL + '/products/' + id);
  }
}
