import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {};

  canActivate() {
    if (this._authService.isPersistence()){
      this._authService.setLoggedUserByPersistence();
      return true;
    }else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
