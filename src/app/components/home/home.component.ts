import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { pip, Product } from '../../model/product.interface';
import { UserService } from 'src/app/services/user.service';
import { userlol, User } from 'src/app/model/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { PageChangedEvent } from '../../../../node_modules/ngx-bootstrap/pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: string = '';
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
  prodit: Product[] = [];
  copy: Product[] = [];

  index: number = -1;
  user: userlol = {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  };
  usersit: User[] = [];
  category: string[] = [];
  cate(smart: string) {
    if (smart != 's') {
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
    if (
      this.copy[this.index].category &&
      this.copy[this.index].category.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  returnedProdit: Product[] = [];

  constructor(
    public authService: AuthService,
    private productService: ProductService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: pip) => {
      this.product = res;
      this.prodit = res.products;
      this.copy = res.products;
    });
    this.userService.getAllUser().subscribe((res: userlol) => {
      this.usersit = res.users;
    });
    this.categoryService.getAllCategory().subscribe((res) => {
      this.category = res;
    });

    // this.prodt = this.prodit.map((i: number) => `Content line ${i + 1}`);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedProdit = this.prodit.slice(startItem, endItem);
  }
}
