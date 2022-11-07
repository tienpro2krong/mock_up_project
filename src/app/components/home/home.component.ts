import { CategoryService } from "./../../services/category.service";
import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { pip, Product } from "../../model/product.interface";
import { UserService } from "src/app/services/user.service";
import { userlol, User } from "src/app/model/user.interface";

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

  user: userlol = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  usersit: User[] = [];
  category: string[] = [];

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
    });
    this.userService.getAllUser().subscribe((res: userlol) => {
      this.usersit = res.users;
    });
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res;
      console.log(res);
    });
  }
}
