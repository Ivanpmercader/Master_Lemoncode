import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';


const Persistence_COOKIE: string = "angular-lab";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUser: User = null;
  private logged: boolean = false;
  private loggedSubject$ = new Subject<boolean>();
  private VALID_USERS: User[] = [];

  constructor() {
    fetch("assets/data/valid-users.json")
    .then(response => response.json())
    .then((users: User[]) => this.VALID_USERS = users)
    .catch(() => this.VALID_USERS = []);
   }

  login(loginUser: User): boolean{

    if (this.checkLogin(loginUser)) {
      this.setUser(loginUser);
      this.setPersistence();
      this.logged = true;
    }else {
      this.logged = false;
    }

    this.loggedSubject$.next(this.logged);

    return this.logged;
  }

  isLogged = ():boolean => this.logged;

  isLoggedObservable = (): Observable<boolean> => this.loggedSubject$.asObservable();

  getUsername = () => this.currentUser !== null ? this.currentUser.username : null;

  logout() {
    localStorage.removeItem(Persistence_COOKIE);
    this.setUser(null);
    this.logged = false;
    this.loggedSubject$.next(this.logged);
  }

  private checkLogin = (loginUser: User): boolean => this.VALID_USERS.some(({username, password}) => username === loginUser.username && password === loginUser.password);

  private setUser = (user: User):void => {this.currentUser = {...user};};

  isPersistence = ():boolean => localStorage.getItem(Persistence_COOKIE) !== null

  getPersistence = (): string => localStorage.getItem(Persistence_COOKIE);

  //In a real case, would be a token in localstorage with necesary information to the api.
  private setPersistence = ():void => {localStorage.setItem(Persistence_COOKIE, this.getUsername());}

  //In a real case, the information of the logged user would be sent to an api and then load data in the web.
  setLoggedUserByPersistence = ():void => {
    this.setUser(this.VALID_USERS.find(user => user.username === this.getPersistence()));
    this.logged = true;
    this.loggedSubject$.next(this.logged);
  }


}
