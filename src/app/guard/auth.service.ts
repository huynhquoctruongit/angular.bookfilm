import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLogin: boolean = false;
  private isLoginAdmin: boolean = false;
  getIsLogin(){
    return this.isLogin;
  }
  getIsLoginAdmin(){
    return this.isLoginAdmin;
  }
  checkLogin(){
    let localUser = localStorage.getItem('currentUser');
    if(localUser){
      this.isLogin = true;
      return JSON.parse(localUser);
    }
    else{
      this.isLogin = false;
    }
  }
  checkLoginAdmin() {
    var localAdmin = localStorage.getItem('adminAcount');
    if (localAdmin) {
      this.isLoginAdmin = true;
      return JSON.parse(localAdmin);
    }
    else {
      this.isLoginAdmin = false;
    }
  }
  constructor() { }
}
