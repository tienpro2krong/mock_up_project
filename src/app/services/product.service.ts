import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pip } from "../model/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseURL = "https://dummyjson.com";

  constructor(private http: HttpClient) {}
<<<<<<< HEAD
  getAllProduct() {
=======
  getAllTodos() {
>>>>>>> 10ced99575dfdc1797e8f6eca45507f0277456df
    return this.http.get<pip>(this.baseURL + "/products");
  }
}
