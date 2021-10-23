import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validLogin: boolean = false;
  loginForm: FormGroup;
  loginUsername: FormControl;
  loginPassword: FormControl;

  constructor(private router: Router, private _authService: AuthService) {
    this.createLoginForm();
   }

  ngOnInit(): void {
  }

  createLoginForm(): void{
    this.loginForm = new FormGroup({});
    this.loginUsername = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.loginPassword = new FormControl('', [Validators.required]);

    this.loginForm.addControl('username', this.loginUsername);
    this.loginForm.addControl('password', this.loginPassword);
  }

  validateLogin():void{
    const USER: User = {username: this.loginUsername.value, password: this.loginPassword.value};
    this._authService.login(USER) ? this.onLoginSuccess(): this.onLoginFailed();
  }

  onLoginFailed():void{
    this.loginForm.get('username').setErrors({login_failed: true});
    this.loginForm.get('password').setErrors({login_failed: true});
    this.loginForm.setErrors({login_failed: true});
  }

  onLoginSuccess():void {
    this.router.navigate(['/dashboard']);
  }
}
