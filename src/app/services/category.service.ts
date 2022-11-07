import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private baseURL = "https://dummyjson.com";
  constructor(private http: HttpClient) {}
  getAllCategory() {
    return this.http.get<string[]>(this.baseURL + "/products/categories");
  }
}
