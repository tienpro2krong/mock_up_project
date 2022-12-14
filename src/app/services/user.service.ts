import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userlol, User } from '../model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'https://dummyjson.com';

  constructor(private htpp: HttpClient) {}
  getAllUser() {
    return this.htpp.get<userlol>(this.baseURL + '/users');
  }
  getUser(id: number) {
    return this.htpp.get<User>(this.baseURL + `/users/${id}`);
  }
}
