import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.interface';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userPro: User = {
    id: 0,
    firstName: '',
    lastName: '',
    maidenName: '',
    age: 0,
    gender: '',
    email: '',
    phone: 0,
    username: '',
    password: '',
    birthDate: '',
    image: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // console.log(localStorage.getItem('id'));
    this.userService
      .getUser(Number(localStorage.getItem('id')))
      .subscribe((res) => {
        this.userPro = res;
        console.log(res);
      });
  }
}
