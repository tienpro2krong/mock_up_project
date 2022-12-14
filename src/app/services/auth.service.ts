import { HttpClient, ÉµHttpInterceptingHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey: string = 'token';
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post('https://dummyjson.com/auth/login', user);
  }

  isLoggedIn() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return token;
    }
    return;
  }
}
