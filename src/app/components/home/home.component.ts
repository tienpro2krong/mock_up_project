import { CategoryService } from "./../../services/category.service";
import { ProductService } from "./../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { pip, Product } from "../../model/product.interface";
import { UserService } from "src/app/services/user.service";
import { userlol, User } from "src/app/model/user.interface";
import { AuthService } from "src/app/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  categories: string = "";
  prodit: Product[] = [];
  copy: Product[] = [];
  index: number = 0;
  user: userlol = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  usersit: User[] = [];
  category: string[] = [];
  product: pip = {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  search() {
    if (this.categories) {
      this.prodit = this.copy.filter((value) => {
        return value.title.includes(this.categories);
      });
    } else {
      this.prodit = this.copy;
    }
  }

  cate(smart: string) {
    if (smart != "s") {
      this.prodit = this.copy.filter((value) => {
        return value.category == smart;
      });
    } else {
      this.productService.getAllProduct().subscribe((res: pip) => {
        this.prodit = res.products;
      });
    }
  }
  check(item: string) {
    this.index = this.copy.findIndex((value: any) => {
      return value.category === item;
    });
    if (this.index) {
      if (this.copy[this.index].category) {
        return true;
      } else {
        return false;
      }
    }
  }
  constructor(
    private spinner: NgxSpinnerService,
    private productService: ProductService,
    public authService: AuthService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.productService.getAllProduct().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
      this.copy = res.products;
      this.spinner.hide();
    });
    this.userService.getAllUser().subscribe((res: userlol) => {
      this.usersit = res.users;
    });
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res;
      console.log(res);
    });
  }
  sort = (name: string): Product[] => {
    if (name == "ratingSort") {
      this.prodit = this.copy
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, 10);
      return this.prodit;
    }
    if (name == "stockSort") {
      this.prodit = this.copy
        .sort((a, b) => {
          return a.stock - b.stock;
        })
        .slice(0, 10);
      return this.prodit;
    }
    if (name == "discountSort") {
      this.prodit = this.copy
        .sort((a, b) => {
          return b.discountPercentage - a.discountPercentage;
        })
        .slice(0, 10);
      return this.prodit;
    }
  };
}
