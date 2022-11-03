import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { pip, Product } from "../../model/product.interface";
<<<<<<< HEAD
import { UserService } from "src/app/services/user.service";
import { userlol, User } from "src/app/model/user.interface";
=======
>>>>>>> 10ced99575dfdc1797e8f6eca45507f0277456df

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

<<<<<<< HEAD
  user: userlol = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  usersit: User[] = [];

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
    });
    this.userService.getAllUser().subscribe((res: userlol) => {
      this.usersit = res.users;
    });
=======
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllTodos().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
    });
>>>>>>> 10ced99575dfdc1797e8f6eca45507f0277456df
  }
}
