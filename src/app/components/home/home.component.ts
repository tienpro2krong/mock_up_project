import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { pip, Product } from "../../model/product.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  product: pip = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  prodit: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllTodos().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
    });
  }
}
