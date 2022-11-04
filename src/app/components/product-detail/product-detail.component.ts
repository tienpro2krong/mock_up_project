import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { pip, Product } from "src/app/model/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params["id"];
    this.productService.getProduct(id).subscribe(
      (res: Product) => {
        this.product = res;
        console.log(res);
      },
      (err) => {}
    );
    console.log(this.activatedRoute);
  }
}
