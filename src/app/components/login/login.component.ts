import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    username: 'atuny0',
    password: '9uQFF1Lh',
  };
  isInvalid: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home']);
        localStorage.setItem('token', res['token']);
      },
      (err) => {
        this.isInvalid = true;
      }
    );
  }
}
