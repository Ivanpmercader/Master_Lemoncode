import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;
  subscription: Subscription = null;
  userLogged: string = null;

  constructor(private _authService: AuthService, private router: Router) {
    this.subscription = this._authService.isLoggedObservable().subscribe( isLogged =>
      {
          this.logged = isLogged;
          this.userLogged = this._authService.getUsername();
      }
    );
  }

  ngOnInit(): void {
  }

  logout() {
    this._authService.logout();
    this.router.navigate(['/home']);
  }

}
