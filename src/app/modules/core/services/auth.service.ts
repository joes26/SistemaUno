import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { Constants } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static jwtHelper = new JwtHelperService();
  private static currentUser: User;

  // private static currentUser: User = {
  //   Token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1OTExMzY0NjAsImV4cCI6MTYyMjY3MjQ2MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.GNJDMcLCG3oqMM83htgybmh0ra6up0nKdyXJb0ajtQs",
  //   Roles: ["dd","dd"]
  // };
  constructor() {
  }

  public static logout() {
    localStorage.removeItem(Constants.Core.Usuario.Token);
    this.currentUser = null!;
  }

  public static loggedIn() {
    const token = localStorage.getItem(Constants.Core.Usuario.Token)!;
    //const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }


  public static roleMatch(allowedRoles: any[]): boolean {

    let isMatch = false;
    const userRoles = this.currentUser.Roles;
    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return;
      }
    });
    return isMatch;
  }

  public static setUser(user: any) {
    this.currentUser = user;
  }

  public static setToken(token: any) {
    let authAppToken: {};
    authAppToken = JSON.parse(localStorage.getItem(Constants.Core.Usuario.Token)!);
    if (authAppToken == null || authAppToken == undefined) {
      authAppToken = {
        createdAt: Date.now(),
        name: "auth:jwt:token",
        ownerStrategyName: "email",
        value: token
      };
    }
    localStorage.setItem(Constants.Core.Usuario.Token, JSON.stringify(authAppToken));
  }
  
  public static verifyEmptyToken(){
    if(localStorage.getItem(Constants.Core.Usuario.Token) !== undefined)
      return true
    else
      return false
  }

  public static getToken() {
    //localStorage.getItem('token');
    return JSON.parse(localStorage.getItem(Constants.Core.Usuario.Token)!);
  }

  public static getUser() {
    return this.currentUser;
  }

  public static getRoles() {
    return this.currentUser.Roles;
  }

}
